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
  },
  row: Number,
  column: Number
});

const Session = mongoose.model("Session", sessionSchema)
module.exports = Session
