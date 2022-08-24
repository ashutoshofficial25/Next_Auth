const express = require("express");

const router = express.Router();

const todoController = require("../controllers/todoController");
const { requireSignIn } = require("../middlewares");

router.post("/addTodo", todoController.addTodo);

module.exports = router;
