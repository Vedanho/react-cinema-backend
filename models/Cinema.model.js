const mongoose = require("mongoose")

const cinemaSchema = mongoose.Schema({
  title: String,
  amountHall: Number,
  placesHall: Number,
  mood: String,
  img: String,
})

const Cinema = mongoose.model("Cinema", cinemaSchema)

module.exports = Cinema