import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { ImageUploader } from "./components/file-reader";

export function JCardScreen() {
  const [coverImage, setCoverImage] = useState<string | null>(null);

  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Grid container spacing={2}>
          <Grid size={2}>
            <ImageUploader setImage={setCoverImage} />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Box
          sx={{
            display: "flex",
            height: "4in",
          }}
        >
          <Box
            key="flap"
            sx={{
              width: "1in",
              borderWidth: 1,
              borderStyle: "dashed",
            }}
          ></Box>
          <Box
            key="spine"
            sx={{
              width: "0.5in",
              borderWidth: 1,
              borderStyle: "dashed",
              borderLeftStyle: "none",
            }}
          ></Box>
          <Box
            key="cover"
            sx={{
              width: "2.5625in",
              borderWidth: 1,
              borderStyle: "dashed",
              borderLeftStyle: "none",
            }}
          >
            {coverImage && (
              <img
                src={coverImage}
                style={{
                  maxWidth: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                alt="cover-image"
              />
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
