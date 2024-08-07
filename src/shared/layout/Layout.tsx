import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import { Outlet, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

interface IMenuItem {
  label: string;
  url: string;
}

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

const menuItems: IMenuItem[] = [
  {
    label: "Home",
    url: "",
  },
  {
    label: "User profile",
    url: "create-user-profile",
  },
  {
    label: "Service context",
    url: "create-a-service-context",
  },
  {
    label: "Application",
    url: "create-an-application",
  },
  {
    label: "Application context",
    url: "create-application-context",
  },
  {
    label: "Data source",
    url: "create-data-source",
  },
  {
    label: "Data security profile",
    url: "create-data-security-profile",
  },
  {
    label: "Request data product",
    url: "request-data-product",
  },
  {
    label: "User Profiles",
    url: "users-list",
  },
];

const Layout = () => {
  const navigate = useNavigate();

  const pages = ['Products', 'Pricing', 'Blog'];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleSelectMenu = (url: string, index: number | null) => {
    setAnchorElNav(null);
    //setSelectedIndex(index);
    navigate(url || "/");
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
      <Box sx={{ px: 3, py: 1, display: "flex" }} >
        <img src="src/assets/logo.png" style={{ height: 35 }} alt="LOGO" />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
      </Box>
      <AppBar position="static" sx={{ backgroundColor: "#b10b1c" }}>
        <Toolbar disableGutters sx={{ paddingX: 3 }}>
          {menuItems.map((item: IMenuItem, index: number) => (
            <Button
              key={item.url + index}
              onClick={() => handleSelectMenu(item.url, index)}
              sx={{ my: 2, mx: 1, color: 'white', display: 'block'}}
            >
              {item.label}
            </Button>
          ))}
        </Toolbar>
      </AppBar>

      <Box sx={{ paddingY: 3, height: "100%", overflowY: "auto" }}>
        <Container>
          <Outlet />
        </Container>
      </Box>

      <Footer sx={{
        boxSizing: "border-box",
        paddingX: 0
      }}>
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Federated Data Marketplace
        </Typography>
      </Footer>
    </Box>
  );
};

export default Layout;
