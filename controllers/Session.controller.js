const Hall = require("../models/Hall.model")
const Session = require("../models/Hall.model")

module.exports.sessionController = {
  getSession: async (req, res) => {
    try {
      const session = await Session.find() 

      res.json(session)
    } catch (e) {
      return res.status(401).json("Ошибка" + e.message)
    }
  },

  postSession: async (req, res) => {
    try {
      const { time, movie, hall} = req.body

      const {row, column } = await Hall.findById(req.params.id)

      const session = await Session.create({
        time,
        movie,
        hall,
        seats: row * column
      })

      await res.json(session)
    } catch (e) {
      return res.status(401).json("Ошибка" + e.message)
    }
  },

  deleteSessionById: async (req, res) => {
    const { id } = req.params

    try {
      const session = await Session.findById(id)

      await session.remove()

      return res.json("Hall was deleted")
    } catch (e) {
      return res.status(401).json("Ошибка" + e.message)
    }
  },

  patchSessionById: async (req, res) => {
    const { name } = req.body
    try {
      const session = await Session.findByIdAndUpdate(req.params.id, {
        name,
      })

      res.json(session)
    } catch (e) {
      return res.status(401).json("Ошибка" + e.message)
    }
  },
}
