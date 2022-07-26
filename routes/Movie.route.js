
const { Router } = require("express")
const { movieControllers } = require("../controllers/Movie.controller")
const pictureMiddleware = require("../middlewares/picture.middleware");


const router = Router()

router.post("/movie", pictureMiddleware.single("image"), movieControllers.createMovie)
router.get("/movie", movieControllers.getMovies)
router.get("/movie/:id", movieControllers.getMoviesByGenre)
router.patch("/movie/:id", movieControllers.updateMovie)
router.delete("/movie/:id", movieControllers.deleteMovie)
module.exports = router
