const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Reservation = require("../database/Schema/reservation");
const Bus = require("../database/Schema/bus");
const { isAuth } = require("../middleware/auth");
const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../database/Schema/user");
const ErrorHandler = require("../utils/ErrorHandler");
const bodyParser = require("body-parser");
const bus = require("../database/Schema/bus");
// Endpoint to handle reservations
router.post(
  ":/busId/reserve",
  isAuth,
  catchAsyncError(async (req, res, next) => {
    try {
      const { seatNumbers, destination, departureDate } = req.body;
      const user = await User.findById(req.user.id);
      const bus = await Bus.findById(req.params.busId);

      if (!bus) {
        return next(new ErrorHandler("Bus with id " + bus + " not found "));
      }

      // Check if all selected seats are available
      const unavailableSeats = seatNumbers.filter(
        (seat) => !bus.seatAvailable.includes(seat)
      );
      if (unavailableSeats.length > 0) {
        return next(
          new ErrorHandler("One or more selected seats are not available", 400)
        );
      }

      // Calculat total price based on number of seats reserved
      const totalPrice = seatNumbers.length * bus.price;

      // Create reservation entry
      const reservation = new Reservation({
        user: user,
        bus: bus,
        seatNumbers: seatNumbers,
        destination: destination,
        departureDate: departureDate,
        status: "pending",
        bookingDate: new Date(),
      });

      // Save the reservation to the database
      await reservation.save();

      //   Update bus reservations array with the new reservation ID
      bus.reservations.push(reservation._id);
      await bus.save();

      const paymentIntent = await stripe.paymentIntents.create({
        amount: totalPrice,
        customer: user,
        description: `Purchase by ${user.email}`,
        currency: "idr",
        metadata: {
          reservationId: reservation._id.toString(),
          company: "TIMU by Wahyu",
        },
      });

      reservation.paymentIntentId = paymentIntent.id;
      await reservation.save();

      res.status(201).json({
        clientSecret: paymentIntent.clientSecret,
        reservationId: reservation._id,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

const endpointSecret = process.env.ENDPOINT_SECRET;
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
        endpointSecret
      );
    } catch (err) {
      console.log(`Webhook signature verification failed`, err.message);
      return res.sendStatus(400);
    }

    // Handle the event
    if (event.type === "payment_intent_succeeded") {
      const paymentIntent = event.data.object;
      const reservationId = paymentIntent.metadata.reservationId;

      await Reservation.findByIdAndUpdate(reservationId, { status: "success" });

      // Find the related bus and updates it seats availability
      const reservation = await Reservation.findById(reservationId);
      const bus = await Bus.findById(reservation.bus);
      bus.seatAvailable = bus.seatAvailable.filter(
        (seat) => !reservation.seatNumbers.includes(seat)
      );
      await bus.save();
    }

    res.sendStatus(200);
  }
);
