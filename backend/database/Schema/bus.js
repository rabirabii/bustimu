const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  busBrand: { type: String, required: true },
  busType: { type: String, required: true },
  facilites: [{ type: String, required: true }],
  seatAvailable: [{ Type: Number, required: true }],
  busBrandImg: { type: String, required: true },
  imgUrl: [{ Type: String, required: true }],
  ratings: { type: Number },
  reviews: [
    {
      user: {
        type: Object,
      },
      rating: {
        type: Number,
      },
      comment: {
        type: String,
      },
      busId: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  price: { type: Number, required: true },
  rute: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Rute",
    required: true,
  },
  reservations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Reservation" }],
});

module.exports = mongoose.model("Bus", busSchema);
