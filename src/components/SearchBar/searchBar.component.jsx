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
  Avatar,
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
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

export const SearchBar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <SimpleTreeView
        aria-label="file system navigator"
        sx={{
          height: 150,
          flexGrow: 1,
          maxWidth: 400,
          overflowY: "auto",
          mt: 2,
        }}
      >
        <TreeItem itemId="1" label="Applications">
          <TreeItem itemId="2" label="Calendar" />
        </TreeItem>
        <TreeItem itemId="5" label="Documents">
          <TreeItem itemId="10" label="OSS" />
          <TreeItem itemId="6" label="MUI">
            <TreeItem itemId="8" label="index.js" />
          </TreeItem>
        </TreeItem>
      </SimpleTreeView>
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
          {DrawerList}
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
