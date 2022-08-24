const express = require("express");

const router = express.Router();

const todoController = require("../controllers/todoController");
const { requireSignIn } = require("../middlewares");

router.post("/addTodo", todoController.addTodo);
router.get("/:userId", todoController.getTodoByUserId);

module.exports = router;
