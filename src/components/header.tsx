import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Logo from "../asset/logo.png";

function ResponsiveAppBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#17c7bd" }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <img src={Logo} alt="logo" loading="lazy" />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Account Details">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Arjun Singh" src="/" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
