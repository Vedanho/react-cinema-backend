const { Router } = require("express")
const { seatController } = require("../controllers/Seat.controller")

const router = Router()

router.post("/movie", seatController.postSeat)
router.get("/movie", seatController.getSeat)
router.patch("/movie/:id", seatController.patchSeat)
router.delete("/movie/:id", seatController.deleteSeat)

module.exports = router
