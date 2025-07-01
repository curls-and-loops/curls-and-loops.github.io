import React, { ChangeEvent } from "react";
import { Button, Box } from "@mui/material";

interface Props {
    setImage: (value: string | null) => void;
    buttonText?: string;
}

export function ImageUploader({setImage, buttonText = "Upload Afbeelding"}: Props) {
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result as string); // base64 string
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <input
        accept="image/*"
        id="upload-image"
        type="file"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      <label htmlFor="upload-image">
        <Button variant="contained" component="span">
          {buttonText}
        </Button>
      </label>
    </Box>
  );
}
