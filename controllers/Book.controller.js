const Book = require("../models/Book.model");
const Session = require("../models/Session.model");

module.exports.bookController = {
  getBook: async (req, res) => {
    try {
      const book = await Book.find();

      res.json(book);
    } catch (e) {
      return res.status(401).json("Ошибка" + e.message);
    }
  },

  postBook: async (req, res) => {
    try {
      const session = await Session.findById(req.params.id);
      const {row, column} = session
      const books = await Book.find({ sessionId: req.params.id }) // countDocuments
      const { user } = req.body;

      if (session.seats > books.length) {
        const book = await Book.create({
          user,
          session: req.params.id,
          column,
          row
        });
        
        res.json(book);
      } 
      
    } catch (e) {
      return res.status(401).json("Ошибка" + e.message);
    }
  },

  deleteBook: async (req, res) => {
    const { id } = req.params;

    try {
      const book = await Book.findById(id);

      await book.remove();

      res.json(book);
    } catch (e) {
      return res.status(401).json("Ошибка" + e.message);
    }
  },

  patchBook: async (req, res) => {
    const { row, col } = req.body;

    try {
      const book = await Book.findByIdAndUpdate(req.params.id, {
        row,
        col,
      });
      res.json(book);
    } catch (e) {
      return res.status(401).json("Ошибка" + e.message);
    }
  },
};
