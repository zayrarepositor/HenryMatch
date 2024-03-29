//======PAQUETES Y LIBRERIAS
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
//======IMPORTACIONES DE COMPONENTES

//======IMPORTACIONES DE FUNCIONES NUESTRAS

//======ESTILO E IMAGENES
import {
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Box,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import Loader from "../Loader/Loader";

const BanNavBar = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const userDetail = useSelector((state) => state.userDetail);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      {isLoading && <Loader></Loader>}
      {isAuthenticated && (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed" color="inherit">
            <Toolbar>
              {/* DESKTOP */}
              <Box sx={{ flexGrow: 1 }} />

              {/* PROFILE */}
              <Box sx={{ display: { xs: "flex", md: 900 } }}>
                <Tooltip title={`${user.name.substring(0, 1)} perfil`}>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      src={userDetail?.picture}
                      alt={user.name.substring(0, 1)}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem
                    key={"logout"}
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    <Typography textAlign="center">Cerrar Sesión</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      )}
    </>
  );
};

export default BanNavBar;
