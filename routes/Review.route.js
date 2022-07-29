const { Router } = require("express");
const { reviewsController } = require("../controllers/Review.controller");

const router = Router();

router.get("/reviews", reviewsController.getAllReviews);
router.post("/reviews", reviewsController.postReview);
router.patch("/reviews/:id", reviewsController.patchReviewById);
router.delete("/reviews/:id", reviewsController.delReviewById);

module.exports = router;
