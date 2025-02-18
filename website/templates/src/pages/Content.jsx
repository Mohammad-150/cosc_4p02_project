// Content.js
import React from "react";
import { Box, Typography } from "@mui/material";
import HomeContent from "./Content/HomeContent";
import MyContent from "./Content/MyContent";
import WritingContent from "./Content/WritingContent";
import TemplatesContent from "./Content/TemplatesContent";

function Content({ sidebarOpen, selectedMenuItem }) {
  let content;

  switch (selectedMenuItem) {
    case "home":
      content = <HomeContent />;
      break;
    case "content":
      content = <MyContent />;
      break;
    case "writing":
      content = <WritingContent />;
      break;
    case "templates":
      content = <TemplatesContent />;
      break;
    default:
      content = <Typography variant="h4">Page Not Found</Typography>;
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 3,
        marginLeft: sidebarOpen ? "240px" : "80px",
        transition: "margin 0.3s ease",
      }}
    >
      {content}
    </Box>
  );
}

export default Content;
