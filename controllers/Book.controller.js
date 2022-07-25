const Book = require("../models/Book.model")

module.exports.bookController = {
  getBook: async (req, res) => {
    try {
      const book = await Book.find()

      res.json(book)
    } catch (e) {
      return res.status(401).json("Ошибка" + e.message)
    }
  },

  postBook: async (req, res) => {
    try {
      const { session } = req.body
      const book = await Book.create({
        session
      })

      res.json(book)
    } catch (e) {
      return res.status(401).json("Ошибка" + e.message)
    }
  },

  deleteBook: async (req, res) => {
    const { id } = req.params

    try {
      const book = await Book.findById(id)

      await book.remove()

      res.json(book)
    } catch (e) {
      return res.status(401).json("Ошибка" + e.message)
    }
  },

  patchBook: async (req, res) => {
    const { row,col } = req.body

    try {
      const book = await Book.findByIdAndUpdate(req.params.id, {
        row,
        col
      })
      res.json(book)
    } catch (e) {
      return res.status(401).json("Ошибка" + e.message)
    }
  },
}
