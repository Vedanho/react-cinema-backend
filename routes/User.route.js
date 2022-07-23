const { Router } = require("express");
const { reviewsController } = require("../controllers/review.controller");

const router = Router();

router.get("/reviews", reviewsController.getAllReviews);
router.post("/review", reviewsController.postReview);
router.patch("/review/:id", reviewsController.patchReviewById);
router.delete("/review/:id", reviewsController.delReviewById);

module.exports = router;
