const Todo = require("../modals/todoModal");

exports.addTodo = async (req, res) => {
  try {
    const { title, taskDesc } = req.body;
    // console.log(title, taskDesc);
    const task = await Todo.create({
      title: title,
      description: taskDesc,
    });
    res.status(201).json({ message: "task added successfully", data: task });
  } catch (error) {
    console.log(error);
    return res.status(404).send("Error Please Try again");
  }
};
