const Hall = require("../models/Hall.model")

module.exports.hallController = {
  getHall: async (req, res) => {
    try {
      const hall = await Hall.find()

      res.json(hall)
    } catch (e) {
      return res.status(401).json("Ошибка" + e.message)
    }
  },

  postHall: async (req, res) => {
    try {
      const hall = await Hall.create(req.body)

      res.json(hall)
    } catch (e) {
      return res.status(401).json("Ошибка" + e.message)
    }
  },

  deleteHallById: async (req, res) => {
    const { id } = req.params

    try {
      const hall = await Hall.findById(id)

      await hall.remove()

      return res.json("Hall was deleted")
    } catch (e) {
      return res.status(401).json("Ошибка" + e.message)
    }
  },

  patchHallById: async (req, res) => {
    const { name } = req.body
    try {
      const hall = await Hall.findByIdAndUpdate(req.params.id, {
        name,
      })

      res.json(hall)
    } catch (e) {
      return res.status(401).json("Ошибка" + e.message)
    }
  },
}
