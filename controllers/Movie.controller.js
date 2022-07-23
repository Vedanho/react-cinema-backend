const Movie = require("../models/Movie.model")

module.exports.movieControllers = {
  createMovie: async (req, res) => {
    try {
      const { name, description, rating, genre } = req.body
      const movie = await Movie.create({
        name,
        description,
        img: req.file,
        rating,
        genre,
      })

      return res.json(movie)
    } catch (error) {
      return res.status(401).json(error.message)
    }
  },
  getMovies: async (req, res) => {
    try {
      const movies = await Movie.find()

      return res.json(movies)
    } catch (error) {
      return res.status(401).json(error.message)
    }
  },
  getMoviesByGenre: async (req, res) => {
    try {
      const movies = await Movie.find({ genre: req.params.id })

      return res.json(movies)
    } catch (error) {
      return res.status(401).json(error.message)
    }
  },
  updateMovie: async (req, res) => {
    try {
      const newMovie = await Movie.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        text: req.body.text,
        description: req.body.description,
      })

      return res.json(newMovie)
    } catch (error) {
      return res.status(401).json(error.message)
    }
  },
  deleteMovie: async (req, res) => {
    try {
      await Movie.findByIdAndRemove(req.params.id)

      return res.json("Фильм удалён")
    } catch (error) {
      return res.status(401).json(error.message)
    }
  },
}
