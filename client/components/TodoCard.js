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

const TodoCard = ({ title, taskDesc }) => {
  const [item, setItem] = useState([]);

  return (
    <Card
      elevation={8}
      sx={{ textAlign: "center", borderTop: "3px dashed red" }}
    >
      <CardHeader title={title} />
      <Divider />
      <CardContent>
        <TextField
          label={taskDesc == "" ? "Enter task description. . ." : ""}
          multiline
          rows={5}
          value={taskDesc}
          placeholder="Start writing . . ."
        />
      </CardContent>
      <Box pr={3} textAlign="end">
        <DeleteIcon sx={{ color: red[700] }} />
      </Box>
    </Card>
  );
};

export default TodoCard;
