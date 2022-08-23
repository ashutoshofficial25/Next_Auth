import React, { Fragment, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  FormControl,
  Grid,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";

import CustomDialog from "../components/CustomDialog";
import TodoCard from "../components/TodoCard";

const TodoPage = () => {
  const [open, setOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [card, setCard] = useState([{}]);
  const [input, setInput] = useState({
    taskTitle: "",
    taskDesc: "",
  });

  // const addNewCard = (item) => {
  //   setCard([...card, item]);
  // };
  const handleChange = (e) => {
    e.preventDefault();
    const taskTitle = e.target.taskTitle;
    const taskDesc = e.target.taskDesc;
    setInput({ ...input, taskTitle, taskDesc });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCard([...card], input);
  };

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // const handleAddTask = () => {
  //   setOpen(false);
  //   addNewCard();
  // };

  const content = () => {
    return (
      <form onSubmit={handleSubmit}>
        <FormControl>
          <TextField
            id="taskTitle"
            type="text"
            sx={{ marginBottom: "10px" }}
            label="Enter task Title"
            name="taskTitle"
            value={input.taskTitle || ""}
            onChange={handleChange}
            fullWidth
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
            value={input.taskDesc || ""}
            onChange={handleChange}
            placeholder="Start writing . . ."
          />
          <br />
          <input type="submit" />
          <Button
            // disabled={taskTitle == "" ? true : false}
            type="submit"
            variant="contained"
          >
            Add
          </Button>
        </FormControl>
      </form>
    );
  };

  return (
    <Fragment>
      <Container>
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
                <Grid item xs={3}>
                  <TodoCard item={item} title={taskTitle} taskDesc={taskDesc} />
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
    </Fragment>
  );
};

export default TodoPage;
