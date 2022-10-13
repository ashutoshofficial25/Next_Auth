import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
} from "@mui/material";
import React, { useContext, useState } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import { red } from "@mui/material/colors";
import { Context } from "../context";
import { URL } from "../context/config";

const TodoCard = ({ item, getTodos }) => {
  const { state } = useContext(Context);
  const { user } = state;

  const handleDelete = async (id) => {
    try {
      const data = await axios.delete(`${URL}/api/delete/${id}`);
      getTodos(user?._id);
      toast("deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    const title = e.target.name;
    console.log(title);
  };

  return (
    <Card
      elevation={8}
      sx={{ textAlign: "center", borderTop: "3px dashed red" }}
    >
      <CardHeader title={item.title} />
      <Divider />
      <CardContent>
        <TextField
          label="Enter task description. . ."
          multiline
          rows={5}
          value={item.description}
        />
      </CardContent>
      <Box pr={3} textAlign="end">
        <DeleteIcon
          className="delete-icon"
          sx={{ color: red[700] }}
          onClick={() => handleDelete(item._id)}
        />
      </Box>
    </Card>
  );
};

export default TodoCard;
