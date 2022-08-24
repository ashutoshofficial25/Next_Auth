exports.addTodo = async (req, res) => {
  try {
    const { taskTitle, taskDesc } = req.body;

    console.log(taskTitle, taskDesc);
  } catch (error) {
    console.log(error);
    return res.status(404).send("Error Please Try again");
  }
};
