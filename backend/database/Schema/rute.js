const mongoose = require("mongoose");

const ruteSchema = new mongoose.Schema({
  pemberhentian: [{ type: String, required: true }],
  destinasi: { type: String, required: true },
  jadwalBerangkat: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Rute", ruteSchema);
