const Router = require("express");
const { userController } = require("../controllers/User.controller");
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/auth.middlewares");

const router = Router();

router.patch("/users/:id", userController.patchController);
router.delete("/users/:id", userController.deleteController);
router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 6, max: 32 }),
  userController.userRegistrationController
);
router.post("/logout", userController.logout);
router.post("/login", userController.login);
router.get("/activated/:link", userController.activateController);
router.get("/refresh", userController.refresh);
router.get("/getUsers", authMiddleware, userController.getUsers);

module.exports = router;
