const { Router } = require("express")
const { bookController } = require("../controllers/Book.controller")

const router = Router()

router.post("/book/:id", bookController.postBook)
router.get("/book", bookController.getBook)
router.patch("/book/:id", bookController.patchBook)
router.delete("/book/:id", bookController.deleteBook)

module.exports = router
