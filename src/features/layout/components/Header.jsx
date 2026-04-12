import React from "react";
import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import Badge from "@mui/material/Badge";

// MUI
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  InputBase
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AdbTwoToneIcon from "@mui/icons-material/AdbTwoTone";

import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

export const  Header = () => {
  const { agregarFavorito, agregarCarrito } = useContext(ShopContext);
    const { carrito, favoritos } = useContext(ShopContext);
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          
          <Typography variant="h6">
            SuperBikers
          </Typography>
        </Box>

        {/* Links centrales */}
        <Box sx={{ display: "flex", gap: 4 }}>

          <NavLink to="/" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "white",
                  backgroundColor: isActive ? "rgba(255,255,255,0.2)" : "transparent",
                  padding: "6px 10px",
                  borderRadius: "6px"
                }}
              >
                <HomeIcon fontSize="small" />
                Inicio
              </Box>
            )}
          </NavLink>

          <NavLink to="/articles" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "white",
                  backgroundColor: isActive ? "rgba(255,255,255,0.2)" : "transparent",
                  padding: "6px 10px",
                  borderRadius: "6px"
                }}
              >
                <InventoryIcon fontSize="small" />
                Artículos
              </Box>
            )}
          </NavLink>

          <NavLink to="/offers" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "white",
                  backgroundColor: isActive ? "rgba(255,255,255,0.2)" : "transparent",
                  padding: "6px 10px",
                  borderRadius: "6px"
                }}
              >
                <LocalOfferIcon fontSize="small" />
                Ofertas
              </Box>
            )}
          </NavLink>

          <NavLink
              to="/hooks"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-primary me-2"
                  : "btn btn-outline-light me-2"
              }
            >
              Hooks
          </NavLink>


          <NavLink to="/favorites" style={{ textDecoration: "none" }}>
            {({ isActive }) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "white",
                  backgroundColor: isActive ? "rgba(255,255,255,0.2)" : "transparent",
                  padding: "6px 10px",
                  borderRadius: "6px"
                }}
              >
                <Badge badgeContent={favoritos.length} color="error">
                  <FavoriteIcon fontSize="small" />
                </Badge>
                Favoritos
              </Box>
            )}
          </NavLink>

        </Box>

        {/* Barra de búsqueda */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.15)",
            padding: "4px 10px",
            borderRadius: "8px",
            width: "250px"
          }}
        >
          <SearchIcon />
          <InputBase
            placeholder="Buscar..."
            sx={{ ml: 1, color: "white", width: "100%" }}
          />
        </Box>

        {/* Iconos derecha */}
        <Box sx={{ display: "flex", gap: 2 }}>

          <NavLink to="/mybuys">
            <IconButton color="white">
              <Badge badgeContent={carrito.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </NavLink>

          <NavLink to="/myaccount">
            <IconButton color="white">
              <AccountCircleIcon />
            </IconButton>
          </NavLink>

        </Box>

      </Toolbar>
    </AppBar>
  );
};