import React from "react";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
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

export const DrawerList = () => {
  return (
    <>
      <Box sx={{ width: 250 }} role="presentation">
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
          <TreeItem itemId="1" label="Dashboard">
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
    </>
  );
};
