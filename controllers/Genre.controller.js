const Genre = require("../models/Genre.model");

module.exports.genreControllers = {
  createGenre: async (req, res) => {
    try {
      const { name } = req.body;

      const genre = await Genre.create({
        name,
      });

      return res.json(genre);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  },
  getGenre: async (req, res) => {
    try {
      const genres = await Genre.find();
      return res.json(genres);
    } catch (error) {
      return res.json(error.message);
    }
  },
  updateGenre: async (req, res) => {
    try {
      const newGenre = await Genre.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
      });

      return res.json(newGenre);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  },
  deleteGenre: async (req, res) => {
    try {
      await Genre.findByIdAndRemove(req.params.id);
      return res.json("Жанр удалён");
    } catch (error) {
      return res.status(401).json(error.message);
    }
  },
};
