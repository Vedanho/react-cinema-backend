const Seat = require("../models/Genre.model")

module.exports.seatController = {
  getSeat: async (req, res) => {
    try {
      const seat = await Seat.find()

      res.json(seat)
    } catch (e) {
      return res.status(401).json("Ошибка" + e.message)
    }
  },

  postSeat: async (req, res) => {
    try {
      const seat = await Seat.find()

      res.json(seat)
    } catch (e) {
      return res.status(401).json("Ошибка" + e.message)
    }
  },

  deleteSeat: async (req, res) => {
    const { id } = req.params

    try {
      const seat = await Seat.findById(id)

      await seat.remove()

      res.json(seat)
    } catch (e) {
      return res.status(401).json("Ошибка" + e.message)
    }
  },

  patchSeat: async (req, res) => {
    const { taken } = req.body

    try {
      const seat = await Seat.findByIdAndUpdate(req.params.id, {
        taken,
      })
      res.json(seat)
    } catch (e) {
      return res.status(401).json("Ошибка" + e.message)
    }
  },
}
