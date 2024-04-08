import React from "react";
import { Fab } from "@mui/material";

export const SignUpButton = () => {
  return (
    <Fab
      sx={{
        background: "linear-gradient(45deg, #FE6B8B 40%, #FF8E53 90%)",
        borderRadius: "10%",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        width: "110px",
        height: "50px",
        position: "fixed",
        bottom: 120,
        right: 120,
        boxShadow: "0 5px 15px 5px rgba(255, 105, 135, .5)",
        "&:hover": {
          boxShadow: "0",
        },
        "&:active": {
          boxShadow: "0 2px 5px 2px rgba(255, 105, 135, .3)",
        },
      }}
    >
      Buy Now
    </Fab>
  );
};
