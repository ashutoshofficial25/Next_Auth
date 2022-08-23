import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const CustomDialog = ({
  title,
  fullWidth,
  maxWidth,
  onClose,
  minHeight,
  children,
  open,
}) => {
  return (
    <Dialog
      onClose={onClose}
      open={open}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
    >
      <DialogTitle onClose={onClose}>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>{title}</Box>
          <CloseIcon onClick={onClose} sx={{ cursor: "pointer" }} />
        </Box>
      </DialogTitle>

      <DialogContent dividers style={{ minHeight: `${minHeight}` }}>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
