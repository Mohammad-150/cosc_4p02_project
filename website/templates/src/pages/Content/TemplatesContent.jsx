import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
} from "@mui/material";

const templates = [
  {
    id: 1,
    name: "Newsletter",
    description: "Generate a professional newsletter.",
  },
  {
    id: 2,
    name: "Social Media Post",
    description: "Create engaging social media content.",
  },
  {
    id: 3,
    name: "Blog Post",
    description: "Write a detailed and SEO-friendly blog post.",
  },
  {
    id: 4,
    name: "Marketing Email",
    description: "Craft a compelling marketing email.",
  },
];

function TemplatesContent({ onSelect }) {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Choose a Template
      </Typography>
      <Grid container spacing={2}>
        {templates.map((template) => (
          <Grid item xs={12} sm={6} md={4} key={template.id}>
            <Card sx={{ cursor: "pointer", "&:hover": { boxShadow: 6 } }}>
              <CardContent>
                <Typography variant="h6">{template.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {template.description}
                </Typography>
                <Button
                  variant="contained"
                  sx={{ mt: 2 }}
                  onClick={() => onSelect(template)}
                >
                  Select
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default TemplatesContent;
