const { Router } = require("express")
const { hallController } = require("../controllers/Hall.controller")

const router = Router()

router.post("/movie", hallController.postHall)
router.get("/movie", hallController.getHall)
router.patch("/movie/:id", hallController.patchHallById)
router.delete("/movie/:id", hallController.deleteHallById)

module.exports = router
