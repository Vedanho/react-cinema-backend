const mongoose = require("mongoose")

const seatSchema = mongoose.Schema({
  row: Number,
  col: Number,
})

const Seat = mongoose.model("Seat", seatSchema)

mongoose.module.exports = Seat
