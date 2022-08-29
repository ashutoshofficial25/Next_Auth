import React, { Fragment, useContext, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";

import CustomDialog from "../components/CustomDialog";
import TodoCard from "../components/TodoCard";
import { toast } from "react-toastify";
import UserRoutes from "../components/routes/UserRoutes";
import axios from "axios";
import { Context } from "../context";

const TodoPage = () => {
  const [open, setOpen] = useState(false);
  const [card, setCard] = useState([]);
  const [input, setInput] = useState({
    taskTitle: "",
    taskDesc: "",
  });
  const { state } = useContext(Context);
  const { user } = state;

  const handleChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/addTodo", {
        title: input.taskTitle,
        taskDesc: input.taskDesc,
        userId: user._id,
      });
      toast.success("Task Added Successfully");
      resetValues();
    } catch (err) {
      console.log(err);
      toast.error(err.response.data);
    }
    getTodos(user._id);
    setOpen(false);
  };

  const resetValues = () => {
    setInput({ taskTitle: "", taskDesc: "" });
  };

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const getTodos = async (userId) => {
    const { data } = await axios.get(`/api/${userId}`);
    setCard(data.data);
  };

  useEffect(() => {
    if (user) {
      getTodos(user?._id);
    }
  }, [user]);

  const content = () => {
    return (
      <form onSubmit={handleSubmit}>
        <TextField
          id="taskTitle"
          type="text"
          sx={{ marginBottom: "10px" }}
          label="Enter task Title"
          name="taskTitle"
          fullWidth
          value={input.taskTitle}
          onChange={handleChange}
        />
        <br />
        <TextField
          sx={{ marginBottom: "10px" }}
          label="Enter task description. . ."
          multiline
          fullWidth
          type="text"
          id="taskDesc"
          name="taskDesc"
          rows={5}
          value={input.taskDesc}
          onChange={handleChange}
          placeholder="Start writing . . ."
        />
        <br />
        <Button
          disabled={input.taskTitle == "" ? true : false}
          type="submit"
          variant="contained"
        >
          Add
        </Button>
      </form>
    );
  };

  return (
    <UserRoutes>
      <Container style={{ marginTop: "10vh" }}>
        <Card elevation={10}>
          <Box py={5} textAlign={"center"}>
            <CardHeader title="Task List" />
            <Button variant="contained" onClick={handleClick}>
              Add New Task
            </Button>
          </Box>
          <Divider sx={{ border: "1px solid #001122" }} />
          <CardContent sx={{ backgroundColor: "#103311" }}>
            <Grid container spacing={2}>
              {card &&
                card.map((item) => (
                  <Grid key={item._id} item xs={3}>
                    <TodoCard item={item} getTodos={getTodos} />
                  </Grid>
                ))}
            </Grid>
          </CardContent>
        </Card>
      </Container>
      <CustomDialog
        open={open}
        onClose={() => handleClose()}
        title="Create Your Task"
        fullWidth
      >
        {content()}
      </CustomDialog>
    </UserRoutes>
  );
};

export default TodoPage;
