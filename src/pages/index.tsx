import { Box, TextareaAutosize, Typography } from "@mui/material";
import React, { useState } from "react";
import MystPreview from "./MystPreview";

const Home = () => {
  const [content, setContent] = useState("");
  return (
    <Box
      sx={{
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" style={{ textAlign: "center" }}>
        Myst Preview
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          padding: "50px",
        }}
      >
        <TextareaAutosize
          minRows={10}
          style={{ width: "500px" }}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter your content here..."
        />
        <Box
          sx={{
            width: "500px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "20px",
            backgroundColor: "#f5f5f5",
          }}
        >
          <MystPreview content={content} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
