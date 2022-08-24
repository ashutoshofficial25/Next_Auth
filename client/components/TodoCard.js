import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";

const TodoCard = ({ item }) => {
  // const [item, setItem] = useState([]);

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
        <DeleteIcon sx={{ color: red[700] }} />
      </Box>
    </Card>
  );
};

export default TodoCard;
