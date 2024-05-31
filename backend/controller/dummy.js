const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const stripe = require("stripe")("your_stripe_secret_key");
const Bus = require("./models/Bus");
const Reservation = require("./models/Reservation");

const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/bus_reservation", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Reservation creation and payment route
app.post("/reserve", async (req, res) => {
  try {
    const { userId, busId, seatNumbers, destination, departureDate } = req.body;

    // Fetch bus details
    const bus = await Bus.findById(busId);
    if (!bus) {
      return res.status(404).json({ error: "Bus not found" });
    }

    // Check if all selected seats are available
    const unavailableSeats = seatNumbers.filter(
      (seat) => !bus.seatsAvailable.includes(seat)
    );
    if (unavailableSeats.length > 0) {
      return res
        .status(400)
        .json({ error: "One or more selected seats are not available" });
    }

    // Calculate total price based on number of seats reserved
    const totalPrice = seatNumbers.length * bus.price;

    // Create a reservation entry
    const reservation = new Reservation({
      user: userId,
      bus: busId,
      seatNumbers: seatNumbers,
      destination: destination,
      departureDate: departureDate,
      status: "pending",
      bookingDate: new Date(), // Set booking date to current date and time
    });

    // Save the reservation to the database
    await reservation.save();

    // Update bus reservations array with the new reservation ID
    bus.reservations.push(reservation._id);
    await bus.save();

    // Create a Payment Intent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalPrice * 100, // Amount in cents
      currency: "usd",
      metadata: { reservationId: reservation._id.toString() },
    });

    // Update the reservation with the Payment Intent ID
    reservation.paymentIntentId = paymentIntent.id;
    await reservation.save();

    // Send client secret and reservation ID back to the client
    res.json({
      clientSecret: paymentIntent.client_secret,
      reservationId: reservation._id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Webhook endpoint to handle payment confirmation from Stripe
app.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  async (req, res) => {
    const signature = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        signature,
        "your_webhook_secret"
      );
    } catch (err) {
      console.log(`Webhook signature verification failed.`, err.message);
      return res.sendStatus(400);
    }

    // Handle the event
    if (event.type === "payment_intent.succeeded") {
      const paymentIntent = event.data.object;
      const reservationId = paymentIntent.metadata.reservationId;

      // Update reservation status to confirmed
      await Reservation.findByIdAndUpdate(reservationId, { status: "success" });

      // Find the related bus and update its seats availability
      const reservation = await Reservation.findById(reservationId);
      const bus = await Bus.findById(reservation.bus);
      bus.seatsAvailable = bus.seatsAvailable.filter(
        (seat) => !reservation.seatNumbers.includes(seat)
      );
      await bus.save();
    }

    res.sendStatus(200);
  }
);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
