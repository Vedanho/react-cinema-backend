const { Router } = require("express")
const { hallController } = require("../controllers/Hall.controller")

const router = Router()

router.post("/hall", hallController.postHall)
router.get("/hall", hallController.getHall)
router.patch("/hall/:id", hallController.patchHallById)
router.delete("/hall/:id", hallController.deleteHallById)

module.exports = router
