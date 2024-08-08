import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import { Outlet, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { AccountCircle } from "@mui/icons-material";
import { AuthContext } from "../../context/AuthContext";
import Login from "../../pages/login/Login";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.08),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.09),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: "auto",
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Footer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  width: "100%",
  padding: theme.spacing(1),
  color: theme.palette.common.white,
}));

const Layout = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = React.useContext(AuthContext);

  const menu = [
    {
      label: "Home",
      url: "",
      protected: true,
    },
    {
      label: "User profile",
      url: "create-user-profile",
      protected: true,
    },
    {
      label: "Service context",
      url: "create-a-service-context",
      protected: true,
    },
    {
      label: "Application",
      url: "create-an-application",
      protected: true,
    },
    {
      label: "Application context",
      url: "create-application-context",
      protected: true,
    },
    {
      label: "Data security profile",
      url: "create-data-security-profile",
      protected: true,
    },
    {
      label: "Request data product",
      url: "request-data-product",
      protected: true,
    },
    {
      label: "User Profiles",
      url: "users-list",
      protected: true,
    },
  ].filter((item) => item.protected && auth);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleGoToMenu = (url) => {
    navigate(url || "/");
  };

  const handleToggleProfile = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseProfile = () => {
    setAnchorEl(null);
  };

  const handleMenuProfile = () => {
    setAuth(null);
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Box sx={{ px: 3, display: "flex", alignItems: "center", minHeight: "60px" }}>
        <img src="src/assets/logo.png" style={{ height: 35 }} alt="LOGO" />

        {auth && (
          <Box sx={{ ml: "auto" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="subtitle2" sx={{ mr: 1 }}>
                {auth?.firstName} {auth?.lastName}
              </Typography>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleToggleProfile}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorEl)}
              onClose={handleCloseProfile}
            >
              <MenuItem sx={{ minWidth: 150 }} onClick={handleMenuProfile}>
                Sing Out
              </MenuItem>
            </Menu>
          </Box>
        )}
      </Box>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#b10b1c", paddingX: 3 }}
      >
        <Box sx={{ display: "flex", width: "100%" }}>
          <Toolbar disableGutters>
            {menu.map((item) => (
              <Button
                key={item.url}
                onClick={() => handleGoToMenu(item.url)}
                sx={{ my: 2, mx: 1, color: "white", display: "block" }}
              >
                {item.label}
              </Button>
            ))}
          </Toolbar>

          {auth && (
            <Search sx={{ my: "auto", ml: "auto" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          )}
        </Box>
      </AppBar>

      <Box sx={{ paddingY: 3, height: "100%", overflowY: "auto" }}>
        <Container>{auth ? <Outlet /> : <Login />}</Container>
      </Box>

      <Footer
        sx={{
          boxSizing: "border-box",
          paddingX: 0,
        }}
      >
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Federated Data Marketplace
        </Typography>
      </Footer>
    </Box>
  );
};

export default Layout;
