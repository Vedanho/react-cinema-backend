const { Router } = require("express")
const { sessionController } = require("../controllers/Session.controller")

const router = Router()

router.post("/session/:id", sessionController.postSession)
router.get("/session/:_id", sessionController.getSession)
router.get("/session", sessionController.getList)
router.patch("/session/:id", sessionController.patchSessionById)
router.delete("/session/:id", sessionController.deleteSessionById)

module.exports = router