const express = require("express");

const router = express.Router();

//controller import
const authController = require("../controllers/authController");
const { requireSignIn } = require("../middlewares");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/logout", authController.logout);
router.get("/current-user", requireSignIn, authController.currnetUser);
module.exports = router;
