const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  text: String,
    movies: {
      ref: "Movie",
      typeof: mongoose.SchemaTypes.ObjectId,
    },
});
const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
