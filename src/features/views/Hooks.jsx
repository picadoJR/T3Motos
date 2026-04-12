import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

/* Importamos los ejemplos */

import CounterExample from "../layout/hooks/CounterExample"
import ColorExample from "../layout/hooks/ColorExample";
import ClockExample from "../layout/hooks/ClockExample";
import UserPersistExample from "../layout/hooks/UserPersistExample";

import ToggleExample from "../layout/hooks/ToggleExample";
import InputExample from "../layout/hooks/InputExample";
import WindowWidthExample from "../layout/hooks/WindowWidthExample";
import FetchExample from "../layout/hooks/FetchExample";
import { UseOnlineStatus } from "../layout/hooks/UseOnlineStatus";


export const Hooks = () => {
  return (
    <Box sx={{ p: 4 }}>
      {/* Título */}
      <Typography
        variant="h4"
        sx={{
          mb: 5,
          fontWeight: "bold",
          color: "#00e5ff",
          textAlign: "center"
        }}
      >
        Ejemplos de React Hooks
      </Typography>

      {/* GRID DE CARDS */}

      <Grid container spacing={4}>

        {/* Counter */}
        <Grid item xs={12} md={6} lg={4}>
          <Card
            sx={{
              p: 2,
              borderRadius: 3,
              backgroundColor: "#fffdfd",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 0 20px #00e5ff"
              }
            }}
          >
            <CardContent>
              <CounterExample />
            </CardContent>
          </Card>
        </Grid>

        {/* Color */}
        <Grid item xs={12} md={6} lg={4}>
          <Card
            sx={{
              p: 2,
              borderRadius: 3,
              backgroundColor: "#ffffff",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 0 20px #00e5ff"
              }
            }}
          >
            <CardContent>
              <ColorExample />
            </CardContent>
          </Card>
        </Grid>

        {/* Clock */}
        <Grid item xs={12} md={6} lg={4}>
          <Card
            sx={{
              p: 2,
              borderRadius: 3,
              backgroundColor: "#ffffff",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 0 20px #00e5ff"
              }
            }}
          >
            <CardContent>
              <ClockExample />
            </CardContent>
          </Card>
        </Grid>

        {/* User Persist */}
        <Grid item xs={12} md={6} lg={4}>
          <Card
            sx={{
              p: 2,
              borderRadius: 3,
              backgroundColor: "#fffefe",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 0 20px #00e5ff"
              }
            }}
          >
            <CardContent>
              <UserPersistExample />
            </CardContent>
          </Card>
        </Grid>

        {/* Toggle */}
        <Grid item xs={12} md={6} lg={4}>
          <Card
            sx={{
              p: 2,
              borderRadius: 3,
              backgroundColor: "#ffffff",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 0 20px #00e5ff"
              }
            }}
          >
            <CardContent>
              <ToggleExample />
            </CardContent>
          </Card>
        </Grid>

        {/* Input */}
        <Grid item xs={12} md={6} lg={4}>
          <Card
            sx={{
              p: 2,
              borderRadius: 3,
              backgroundColor: "#ffffff",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 0 20px #00e5ff"
              }
            }}
          >
            <CardContent>
              <InputExample />
            </CardContent>
          </Card>
        </Grid>

        {/* Window width */}
        <Grid item xs={12} md={6} lg={4}>
          <Card
            sx={{
              p: 2,
              borderRadius: 3,
              backgroundColor: "#ffffff",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 0 20px #00e5ff"
              }
            }}
          >
            <CardContent>
              <WindowWidthExample />
            </CardContent>
          </Card>
        </Grid>

        {/* Fetch */}
        <Grid item xs={12} md={6} lg={4}>
          <Card
            sx={{
              p: 2,
              borderRadius: 3,
              backgroundColor: "#fff8f8",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 0 20px #00e5ff"
              }
            }}
          >
            <CardContent>
              <FetchExample />
            </CardContent>
          </Card>
        </Grid>


         <Grid item xs={12} md={6} lg={4}>
          <Card
            sx={{
              p: 2,
              borderRadius: 3,
              backgroundColor: "#ffffff",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 0 20px #00e5ff"
              }
            }}
          >
            <CardContent>
              <UseOnlineStatus/>
            </CardContent>
          </Card>
        </Grid>

      </Grid>

    </Box>
  );
};

export default Hooks;