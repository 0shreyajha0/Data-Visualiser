import React from "react";
import {
  Box,
  Typography,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Select,
  MenuItem,
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
} from "@mui/material";
import { grey, red } from "@mui/material/colors";
import {
  MoveToInbox as InboxIcon,
  Mail as MailIcon,
  Search as SearchIcon,
  MenuOpen as MenuOpenIcon,
  Menu as MenuIcon,
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

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

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
          justifyContent: "space-between ",
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
          {DrawerList}
        </Drawer>

        <SearchIcon onClick={handleSearchClick} />
      </Box>
      <Box></Box>
    </Box>
  );
};
