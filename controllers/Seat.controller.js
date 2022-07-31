const Seat = require("../models/Seat.model");

module.exports.seatController = {
  getAllSeats: async (req, res) => {
    const allSeat = await Seat.find().populate("hall");
    res.json(allSeat);
  },

  postSeat: async (req, res) => {
    try {
      const seat = await Seat.create({
        price: req.body.price,
        hall: req.body.hall,
        name: req.body.name,
      });

      return res.json(seat);
    } catch (e) {
      res.json(e.message);
    }
  },

  patchSeatById: async (req, res) => {
    try {
      const seat = await Seat.findByIdAndUpdate(req.params.id , {
        isBlocked: req.body.isBlocked,
      }, {new : true }).populate("hall");

      res.json(seat);
    } catch (e) {
      res.status(401).json(e.message);
    }
  },

  delSeat: async (req, res) => {
    try {
      const seat = await Seat.findByIdAndRemove(req.params.id);
      res.json("Ваш отзыв удален");
    } catch (e) {
      res.json("hello" + e.message);
    }
  },
};
