import React from "react";
import { DrawerList } from "../DrawerList";
import { Box, Typography, Drawer, Button, Avatar } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import {
  Search as SearchIcon,
  MenuOpen as MenuOpenIcon,
  Translate as TranslateIcon,
  LightMode as LightModeIcon,
  AppRegistration as AppRegistrationIcon,
  NotificationsActive as NotificationsActiveIcon,
} from "@mui/icons-material";

export const SearchBar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
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
        <Button
          onClick={toggleDrawer(true)}
          style={{ color: "black", fontWeight: "bold  ", fontSize: "bold" }}
        >
          <MenuOpenIcon style={{ color: "black", fontWeight: "bold  " }} />
        </Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <DrawerList />
        </Drawer>
        <SearchIcon onClick={handleSearchClick} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between ",
          alignItems: "center",
          flexDirection: "row",
          ml: 2,
          mr: 2,
          width: "15%",
        }}
      >
        <TranslateIcon />
        <LightModeIcon />
        <AppRegistrationIcon />
        <NotificationsActiveIcon />
        <Avatar />
      </Box>
    </Box>
  );
};
