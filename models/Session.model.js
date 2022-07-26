const mongoose = require("mongoose");

const sessionSchema = mongoose.Schema({
  time: Date,
  seats: Number,
  movie: {
    ref: "Movie",
    type: mongoose.SchemaTypes.ObjectId,
  },
  hall: {
    ref: "Hall",
    type: mongoose.SchemaTypes.ObjectId,
  }
});

