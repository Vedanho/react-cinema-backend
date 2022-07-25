const mongoose = require("mongoose")

const movieSchema = mongoose.Schema({
  name: String,
  description: String,
  length: String,
  limitation: Number,
  country: String,
  img: String,
  rating: Number,
  producer: String,
  genre: [
    {
      ref: "Genre",
      type: mongoose.SchemaTypes.ObjectId,
    },
  ],
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie
