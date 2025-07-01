import { createTheme } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/monoton";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontFamily: "Monoton",
    },
  },
});

export default theme;
