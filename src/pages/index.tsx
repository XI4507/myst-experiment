import { Box, TextareaAutosize } from "@mui/material";
import React, { useState } from "react";
import MystPreview from "./MystPreview";

const Home = () => {
  const [content, setContent] = useState("");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        padding: "50px",
      }}
    >
      <TextareaAutosize
        minRows={20}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Box
        sx={{
          minWidth: "300px",
          minHeight: "300px",
          border: "1px solid black",
        }}
      >
        <MystPreview content={content} />
      </Box>
    </Box>
  );
};

export default Home;
