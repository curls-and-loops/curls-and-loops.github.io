import React from "react";
import "./App.css";
import { Grid, Paper, Typography } from "@mui/material";
import { PageTitle } from "./core/ui/titles/page-title";
import { JCardScreen } from "./features/j-card-template/j-card-screen";

function App() {
  return (
    <Grid container spacing={2} direction="row" bgcolor="#fbd1ff">
      <Grid size={12} direction="row" flexWrap="wrap">
        <PageTitle text="Curls + Loops" />
      </Grid>
      <Grid size={12}>
        <Grid container></Grid>
      </Grid>
    </Grid>
  );
}

export default App;
