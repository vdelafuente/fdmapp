import * as React from "react";
import {styled, alpha} from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {Outlet, useNavigate} from "react-router-dom";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

interface IMenuItem {
  label: string;
  url: string;
}

const Search = styled("div")(({theme}) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({theme}) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
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

const Footer = styled("div")(({theme}) => ({
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
    label: "Create user profile",
    url: "create-user-profile",
  },
  {
    label: "Create a service context",
    url: "create-a-service-context",
  },
  {
    label: "Create an application",
    url: "create-an-application",
  },
  {
    label: "Create application context",
    url: "create-application-context",
  },
  {
    label: "Create data source",
    url: "create-data-source",
  },
  {
    label: "Create data security profile",
    url: "create-data-security-profile",
  },
  {
    label: "Request data product",
    url: "request-data-product",
  },
];

const Layout: React.FC = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  const open = Boolean(anchorEl);

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelectMenu = (url: string, index: number | null) => {
    setAnchorEl(null);
    setSelectedIndex(index);
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
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{mr: 2}}
            onClick={toggleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={() => handleSelectMenu("/", null)}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {menuItems.map((item: IMenuItem, index: number) => (
              <MenuItem
                key={index}
                onClick={() => handleSelectMenu(item.url, index)}
                selected={index === selectedIndex}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{flexGrow: 1, display: {xs: "none", sm: "block"}}}
          >
            Federated Market Place
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{"aria-label": "search"}}
            />
          </Search>
        </Toolbar>
      </AppBar>

      <Box sx={{paddingY: 3, height: "100%", overflowY: "auto"}}>
        <Container>
          <Outlet />
        </Container>
      </Box>

      <Footer>
        <Typography sx={{width: "100%"}} variant="body2" align="center">
          © {new Date().getFullYear()} Federated Data Marketplace
        </Typography>
      </Footer>
    </Box>
  );
};

export default Layout;
