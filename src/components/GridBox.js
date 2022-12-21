import React from "react";
import { Grid, Box } from "@mui/material";

const GridBox = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column">
      <Box
        justifyContent="center"
        sx={{
          display: "flex",
          width: "60%",
          height: "100vh",
          bgcolor: "#91AEC1",
          p: 3,
          borderRadius: "16px",
        }}></Box>
    </Grid>
  );
};

export default GridBox;
