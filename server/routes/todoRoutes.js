const express = require("express");

const router = express.Router();

const todoController = require("../controllers/todoController");

router.post("addTodo", todoController.addTodo);

module.exports = router;
