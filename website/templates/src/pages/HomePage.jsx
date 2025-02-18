// HomePage.js
import React, { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "./SideBar";
import Content from "./Content";

function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedMenuItem, setSelectedMenuItem] = useState("home"); // Default to "home"

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar Component */}
      <Sidebar
        open={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        onMenuItemClick={(item) => setSelectedMenuItem(item)} // Pass the selected item
      />

      {/* Main Content Component */}
      <Content sidebarOpen={sidebarOpen} selectedMenuItem={selectedMenuItem} />
    </Box>
  );
}

export default HomePage;
