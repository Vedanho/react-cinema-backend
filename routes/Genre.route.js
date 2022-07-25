const { Router } = require("express");
const { genreControllers } = require("../controllers/Genre.controller");

const router = Router();

router.post("/genre", genreControllers.createGenre);
router.get("/genre", genreControllers.getGenre);
router.patch("/genre/:id", genreControllers.updateGenre);
router.delete("/genre/:id", genreControllers.deleteGenre);

module.exports = router
