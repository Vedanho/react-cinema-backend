const { Router } = require("express");
const { seatController } = require("../controllers/Seat.controller");

const router = Router();

router.post("/seat", seatController.postSeat);
router.get("/seat", seatController.getAllSeats);
router.patch("/seat/:id", seatController.patchSeatById);
router.delete("/seat/:id", seatController.delSeat);

module.exports = router;
