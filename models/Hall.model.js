const mongoose = require("mongoose")

const hallSchema = mongoose.Schema({
  name: String,
})

const Hall = mongoose.model("Hall", hallSchema)

module.exports = Hall
