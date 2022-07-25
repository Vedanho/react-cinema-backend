const { Router } = require("express")
const { movieControllers } = require("../controllers/Movie.controller")

const router = Router()

router.post("/movie", movieControllers.createMovie)
router.get("/movie", movieControllers.getMovies)
router.get("/movie/:id", movieControllers.getMoviesByGenre)
router.patch("/movie/:id", movieControllers.updateMovie)
router.delete("/movie/:id", movieControllers.deleteMovie)

module.exports = router
