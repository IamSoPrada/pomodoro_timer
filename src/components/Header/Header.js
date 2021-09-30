import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  "@media all": {
    minHeight: 50,
  },
}));

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <StyledToolbar>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, alignSelf: "center" }}>
            Pomodorro
          </Typography>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
