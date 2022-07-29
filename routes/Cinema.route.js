const { Router } = require("express")
const { cinemaController } = require('../controllers/Cinema.controller')

const router = Router()

router.post("/cinema", cinemaController.createCinema)
router.get("/cinemas", cinemaController.getCinema)
router.patch("/cinema/:id", cinemaController.editCinemaById)
router.delete("/cinema/:id", cinemaController.deleteCinema)

module.exports = router