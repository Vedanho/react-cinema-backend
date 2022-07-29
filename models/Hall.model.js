const mongoose = require("mongoose")

const hallSchema = mongoose.Schema({
  name: String,
  row: Number,
  column: Number,
})

const Hall = mongoose.model("Hall", hallSchema)

module.exports = Hall
