import React, { useState, useEffect } from "react";
import { TextField, Typography, Box } from "@mui/material";

const UserPersistExample = () => {

  const [name, setName] = useState(
    localStorage.getItem("username") || ""
  );

  useEffect(() => {
    localStorage.setItem("username", name);
  }, [name]);

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6">
        Usuario persistente
      </Typography>

      <TextField
        id="user-persist-name"
        name="userName"
        label="Escribe tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
      />

      <Typography sx={{ mt: 2 }}>
        Usuario: {name}
      </Typography>

    </Box>
  );
};

export default UserPersistExample;