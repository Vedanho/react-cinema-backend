const mongoose = require("mongoose")

const seatSchema = mongoose.Schema({
  hall: {
    ref: "Hall",
    type: mongoose.SchemaTypes.ObjectId,
  },
  taken: {
    type: Boolean,
    default: false,
  },
})

const Seat = mongoose.model("Seat", seatSchema)

mongoose.module.exports = Seat
