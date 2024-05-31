const mongoose = require("mongoose");

const jadwalSchema = new mongoose.Schema({
  jadwal: { type: Date },
});

module.exports = mongoose.model("Jadwal", jadwalSchema);
