const express = require("express");
const authController = require("../controllers/authController");
const auth = require("../middlewares/auth");

//create a router
const authRouter = express.Router();

//define the routes
authRouter.post("/api/v1/register", authController.register);
authRouter.post("/api/v1/login", authController.login);
authRouter.get(
  "/api/v1/user",
  auth.verifiedLogin,
  authController.getUserProfile
);

module.exports = authRouter;
