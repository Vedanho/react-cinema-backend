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
  column: Number
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
