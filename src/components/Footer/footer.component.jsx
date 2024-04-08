import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FaHeart } from "react-icons/fa";
import { PiCopyrightThin } from "react-icons/pi";
import { FOOTER_DATA } from "./footer.constant";

export const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: "10%",
        margin: "20px 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around ",
          alignItems: "center",
        }}
      >
        <PiCopyrightThin />
        <Typography variant="body2" sx={{ color: "grey" }}>
          &nbsp; 2024 Made With&nbsp;{" "}
        </Typography>{" "}
        <FaHeart sx={{ color: "red  " }} />
        <Typography variant="body2" sx={{ color: "grey" }}>
          &nbsp;By&nbsp;
        </Typography>
        <Typography variant="body2" sx={{ color: "purple" }}>
          Pixinvent
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        {FOOTER_DATA.map((item, index) => (
          <Typography
            variant="body2"
            key={index}
            mr={2}
            sx={{
              color: "purple",
              "& a": {
                textDecoration: "none",
              },
            }}
          >
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.item}
            </a>
          </Typography>
        ))}
      </Box>
    </Box>
  );
};
