const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  user: {
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId,
  },
  session: {
    ref: "Session",
    type: mongoose.SchemaTypes.ObjectId,
  },
  row: Number,
  col: Number,
  user: {
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId,
  },
});

bookSchema.index({ session: 1, row: 1, col: 1 }, { unique: true });

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
