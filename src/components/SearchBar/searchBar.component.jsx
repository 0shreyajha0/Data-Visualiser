import React from "react";
import { Box, Typography } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { grey, red } from "@mui/material/colors";
import TranslateIcon from "@mui/icons-material/Translate";
import LightModeIcon from "@mui/icons-material/LightMode";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

export const SearchBar = () => {
  const handleMenuClick = () => {
    console.log("i can search");
  };
  const handleSearchClick = () => {
    console.log("i can search");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        width: "auto",
        height: 60,
        margin: 2,
        backgroundColor: "white",
        border: "10px",
        borderColor: red[200],
        borderRadius: "8px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around ",
          alignItems: "center",
          flexDirection: "row",
          ml: 2,
        }}
      >
        <MenuOpenIcon />
        <MenuItem onClick={handleMenuClick} />
        <SearchIcon onClick={handleSearchClick} />
      </Box>
      <Box></Box>
    </Box>
  );
};
