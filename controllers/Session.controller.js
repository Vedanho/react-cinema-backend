
const Hall = require("../models/Hall.model");
const Session = require("../models/Session.model");

module.exports.sessionController = {
  getList: async (req, res) => {
    try {

      const session = await Session.find();

      res.status(200).json(session);
    } catch (e) {
      return res.status(401).json("Ошибка" + e.message);
    }
  },
  getSession: async (req, res) => {
    const { _id } = req.params;
    try {
      const session = await Session.findById(_id).populate("hall");

      res.status(200).json(session);
    } catch (e) {
      return res.status(401).json("Ошибка" + e.message);
    }
  },

  postSession: async (req, res) => {
    try {
      const { time, movie, hall } = req.body

      const { row, column } = await Hall.findById(req.params.id)


      const session = await Session.create({
        time,
        movie,

        hall: req.params.id,
        seats: row * column,
        row,
        column,
      });

      await res.json(session);
    } catch (e) {
      return res.status(401).json("Ошибка" + e.message);
    }
  },

  deleteSessionById: async (req, res) => {
    const { id } = req.params;

    try {
      const session = await Session.findById(id);

      await session.remove();

      return res.json("Hall was deleted");
    } catch (e) {
      return res.status(401).json("Ошибка" + e.message);
    }
  },

  patchSessionById: async (req, res) => {
    const { name } = req.body;
    try {
      const session = await Session.findByIdAndUpdate(req.params.id, {
        name,
      });

      res.json(session);
    } catch (e) {
      return res.status(401).json("Ошибка" + e.message);
    }
  },
};
