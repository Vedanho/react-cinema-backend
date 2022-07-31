const Cinema = require("../models/Cinema.model");

module.exports.cinemaController = {
  createCinema: async (req, res) => {
    try {
      const { title, amountHall, placesHall, mood, img } = req.body;

      const cinema = await Cinema.create({
        title,
        amountHall,
        placesHall,
        mood,
        img,
      });

      return res.json(cinema);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  },
  getCinema: async (req, res) => {
    try {
      const cinema = await Cinema.find();
      return res.json(cinema);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  },
  editCinemaById: async (req, res) => {
    try {
      const { title, amountHall, placesHall, mood, img } = req.body;
      const cinema = await Book.findByIdAndUpdate(req.params.id, {
        title,
        amountHall,
        placesHall,
        mood,
        img,
      });

      return res.json(cinema);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  },
  deleteCinema: async (req, res) => {
    try {
      await Cinema.findByIdAndRemove(req.params.id);

      return res.json("Кинотеатр удалён");
    } catch (error) {
      return res.status(401).json(error.message);
    }
  },
};
