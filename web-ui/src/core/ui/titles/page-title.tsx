import { Grid, Typography } from "@mui/material";
import React from "react";

interface Props {
  text: string;
}

export function PageTitle({ text }: Props) {
  const title = Array.from(text.replace(/\s+/g, ""));

  return (
    <Grid container justifyContent="center">
      {title.map((value, index) => {
        const rotate =
          index % 2 === 0
            ? Math.floor(Math.random() * 40)
            : -Math.floor(Math.random() * 40);

        return (
          <Grid
            textAlign="center"
            borderRadius={8}
            boxShadow={1}
            bgcolor="#b9facc"
            sx={{
              width: 128,
              height: 128,
              transform: `rotate(${rotate}deg)`,
            }}
          >
            <Typography variant="h1">{value}</Typography>
          </Grid>
        );
      })}
    </Grid>
  );
}
