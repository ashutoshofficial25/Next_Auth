import React, { Fragment, useState } from "react";
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

const TodoPage = () => {
  const [open, setOpen] = useState(false);
  const [card, setCard] = useState([]);
  const [input, setInput] = useState({
    taskTitle: "",
    taskDesc: "",
  });

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
      });
      console.log(data);
      toast.success("Task Added Successfully");
    } catch (err) {
      console.log(err);
      toast.error(err.response.data);
    }

    setCard([...card, input]);
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const getTodos = async () => {};

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
        <Card>
          <Box py={5} textAlign={"center"}>
            <CardHeader title="Task List" />
            <Button variant="contained" onClick={handleClick}>
              Add New Task
            </Button>
          </Box>
          <Divider sx={{ border: "1px solid #001122" }} />
          <CardContent sx={{ backgroundColor: "#103311" }}>
            <Grid container spacing={2}>
              {card.map((item) => (
                <Grid key={item.taskTitle} item xs={3}>
                  <TodoCard item={item} />
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
