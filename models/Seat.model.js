const mongoose = require("mongoose")

const seatSchema = mongoose.Schema({
  price: Number,
  isChosen: {
    type: Boolean,
    default: false
  },
  isBlocked: {
    type: Boolean,
    default: false
  },
  hall: {
    ref: "Hall",
    type: mongoose.SchemaTypes.ObjectId
  },
  name: Number

})
const Seat = mongoose.model("Seat", seatSchema)
module.exports = Seat
