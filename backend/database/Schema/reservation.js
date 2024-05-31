const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  bus: { type: mongoose.Schema.Types.ObjectId, ref: "Bus", required: true },
  seatNumbers: [{ type: Number, required: true }],
  destination: { type: String, required: true },
  departureDate: { type: Date, required: true },
  returnDate: { type: Date },
  bookingDate: { type: Date, default: Date.now },
  paymentIntentId: { type: String },
  status: { type: String, enum: ["pending", "success"], default: "pending" },
});

module.exports = mongoose.model("Reservation", reservationSchema);
