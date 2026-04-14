import React, { useState } from "react";
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
  InputBase,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  useMediaQuery,
  useTheme
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CloseIcon from "@mui/icons-material/Close";

export const Header = () => {
  const { carrito, favoritos } = useContext(ShopContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { path: "/", text: "Inicio", icon: <HomeIcon /> },
    { path: "/articles", text: "Artículos", icon: <InventoryIcon /> },
    { path: "/offers", text: "Ofertas", icon: <LocalOfferIcon /> },
    { path: "/hooks", text: "Hooks", icon: null },
    { path: "/favorites", text: "Favoritos", icon: <FavoriteIcon />, badge: favoritos.length },
  ];

  return (
    <AppBar position="fixed" sx={{ zIndex: 1100 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", minHeight: { xs: "56px", sm: "64px" } }}>

        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography variant="h6" sx={{ fontSize: { xs: "0.9rem", sm: "1.25rem" } }}>
            SuperBikers
          </Typography>
        </Box>

        {/* Menú Desktop */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 2 }}>
            {menuItems.map((item) => (
              <NavLink key={item.path} to={item.path} style={{ textDecoration: "none" }}>
                {({ isActive }) => (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: "white",
                      backgroundColor: isActive ? "rgba(255,255,255,0.2)" : "transparent",
                      padding: "6px 10px",
                      borderRadius: "6px",
                      "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" }
                    }}
                  >
                    {item.badge !== undefined ? (
                      <Badge badgeContent={item.badge} color="error">
                        {item.icon}
                      </Badge>
                    ) : item.icon}
                    {item.text}
                  </Box>
                )}
              </NavLink>
            ))}
          </Box>
        )}

        {/* Barra de búsqueda */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.15)",
            padding: "4px 10px",
            borderRadius: "8px",
            width: { sm: "180px", md: "250px" }
          }}
        >
          <SearchIcon sx={{ fontSize: "20px" }} />
          <InputBase
            id="search-input"
            name="search"
            placeholder="Buscar..."
            sx={{ ml: 1, color: "white", width: "100%", fontSize: "14px" }}
          />
        </Box>

        {/* Iconos derecha */}
        <Box sx={{ display: "flex", gap: { xs: 0.5, sm: 1 }, alignItems: "center" }}>
          
          {/* Carrito - SIEMPRE visible */}
          <NavLink to="/mybuys" style={{ textDecoration: "none" }}>
            <IconButton color="inherit" size={isMobile ? "small" : "medium"}>
              <Badge badgeContent={carrito.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </NavLink>

          {/* Mi cuenta - SIEMPRE visible */}
          <NavLink to="/myaccount" style={{ textDecoration: "none" }}>
            <IconButton color="inherit" size={isMobile ? "small" : "medium"}>
              <AccountCircleIcon />
            </IconButton>
          </NavLink>

          {/* Botón menú hamburguesa (solo en móvil) */}
          {isMobile && (
            <IconButton color="inherit" onClick={() => setDrawerOpen(true)} size="small">
              <MenuIcon />
            </IconButton>
          )}
        </Box>

        {/* DRAWER - Menú lateral para móvil */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          sx={{
            "& .MuiDrawer-paper": {
              width: "70%",
              maxWidth: "280px",
              backgroundColor: "#1a1a1a",
              color: "white"
            }
          }}
        >
          <Box sx={{ p: 2 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
              <Typography variant="h6">Menú</Typography>
              <IconButton onClick={() => setDrawerOpen(false)} color="inherit">
                <CloseIcon />
              </IconButton>
            </Box>
            
            <List>
              {menuItems.map((item) => (
                <ListItem key={item.path} disablePadding>
                  <ListItemButton
                    component={NavLink}
                    to={item.path}
                    onClick={() => setDrawerOpen(false)}
                    sx={{
                      color: "white",
                      borderRadius: "8px",
                      mb: 0.5,
                      "&.active": { backgroundColor: "rgba(255,255,255,0.2)" },
                      "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" }
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, width: "100%" }}>
                      {item.badge !== undefined ? (
                        <Badge badgeContent={item.badge} color="error">
                          {item.icon}
                        </Badge>
                      ) : item.icon}
                      <ListItemText primary={item.text} />
                    </Box>
                  </ListItemButton>
                </ListItem>
              ))}
              
              {/* Separador */}
              <Box sx={{ my: 2, borderBottom: "1px solid rgba(255,255,255,0.2)" }} />
              
              {/* Búsqueda en móvil */}
              <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "rgba(255,255,255,0.15)", padding: "8px 12px", borderRadius: "8px", mt: 1 }}>
                <SearchIcon sx={{ fontSize: "20px", mr: 1 }} />
                <InputBase
                  placeholder="Buscar..."
                  sx={{ color: "white", width: "100%" }}
                />
              </Box>
            </List>
          </Box>
        </Drawer>

      </Toolbar>
    </AppBar>
  );
};