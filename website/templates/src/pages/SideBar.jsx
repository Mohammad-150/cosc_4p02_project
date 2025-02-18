// Sidebar.js
import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import {
  Home,
  Dashboard,
  Settings,
  Logout,
  Menu as MenuIcon,
  AccountCircle,
  EditNote,
  Description,
} from "@mui/icons-material";

const Sidebar = ({ open, toggleSidebar, onMenuItemClick }) => {
  const handleMenuItemClick = (item) => {
    onMenuItemClick(item); // Notify the parent component
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? 240 : 80,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? 240 : 80,
          boxSizing: "border-box",
          backgroundColor: "#121212",
          color: "white",
          transition: "width 0.3s",
        },
      }}
    >
      {/* Sidebar Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: 2,
          justifyContent: open ? "space-between" : "center",
        }}
      >
        {open && <Typography variant="h6">Menu</Typography>}
        <IconButton onClick={toggleSidebar} sx={{ color: "white" }}>
          <MenuIcon />
        </IconButton>
      </Box>

      <Divider />

      {/* Sidebar Items */}
      <List>
        {[
          { text: "Home", icon: <Home />, key: "home" },
          { text: "My Content", icon: <Dashboard />, key: "content" },
          { text: "Writing", icon: <EditNote />, key: "writing" },
          { text: "Templates", icon: <Description />, key: "templates" },
        ].map((item) => (
          <ListItem
            button
            key={item.key}
            onClick={() => handleMenuItemClick(item.key)}
            sx={{
              "&:hover": {
                backgroundColor: "#444",
              },
            }}
          >
            <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
            {open && <ListItemText primary={item.text} />}
          </ListItem>
        ))}
      </List>

      <Divider sx={{ marginTop: "auto" }} />

      {/* Account Settings at Bottom */}
      <List>
        <ListItem button>
          <ListItemIcon sx={{ color: "white" }}>
            <AccountCircle />
          </ListItemIcon>
          {open && <ListItemText primary="Account Settings" />}
        </ListItem>
        <ListItem button>
          <ListItemIcon sx={{ color: "white" }}>
            <Logout />
          </ListItemIcon>
          {open && <ListItemText primary="Logout" onClick={handleLogout} />}
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
