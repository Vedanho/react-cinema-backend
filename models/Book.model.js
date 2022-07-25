const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  row: Number,
  col: Number,
  user: {
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId,
  },
  session: {
    ref: "Session",
    type: mongoose.SchemaTypes.ObjectId,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
