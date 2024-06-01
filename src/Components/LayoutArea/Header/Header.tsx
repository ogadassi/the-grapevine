import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import imgSrc from "../../../Assets/Images/האשכול3.png";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { theme } from "../../../theme";
import { NavLink } from "react-router-dom";

const pages = [
  { text: "משחק החוקיות", url: "/game-of-hukiyoot" },
  { text: "ארץ עיר", url: "/land-city" },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      color="secondary"
      sx={{ backgroundColor: theme.palette.secondary.light }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            component={NavLink}
            to="/the-grapevine"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            <Box
              component="img"
              sx={{
                mt: 1,
                mb: 1,
                height: 60,
                width: 160,
              }}
              alt="logo"
              src={imgSrc}
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, alignItems:'center', justifyContent:'' }}>
            <Box
              component="img"
              sx={{
                mt: 1,
                mb: 1,
                height: 60,
                width: 160,
              }}
              alt="logo"
              src={imgSrc}
            />
            {pages.map((page) => (
              <Button
                key={page.text}
                component={NavLink}
                to={page.url}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.text}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              flexDirection: "row-reverse",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  sx={{
                    display: "block",
                    textAlign: "right",
                  }}
                  key={page.text}
                  onClick={handleCloseNavMenu}
                >
                  <Typography
                    color="secondary"
                    sx={{
                      color: theme.palette.secondary.light,
                      textDecorationLine: "none",
                      fontWeight: "bold",
                    }}
                  >
                    <NavLink to={page.url}>{page.text}</NavLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
