const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  name: String,
  description: String,
  length: String,
  limitation: Number,
  country: String, 
  img: String,
  rating: {
    type: Number,
    default: 0
  },
  genre: [{
    ref: "Genre",
    type: mongoose.SchemaTypes.ObjectId,
  }],
  img_slider: String
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
