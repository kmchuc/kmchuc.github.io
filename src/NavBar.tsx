import React from 'react';
import {AppBar, CssBaseline, Stack, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
      <AppBar position={'static'} color={'transparent'} sx={{ boxShadow:'none' }}>
          <CssBaseline />
          <Toolbar disableGutters sx={{ justifyContent: 'center' }}>
              <Stack direction={'row'} spacing={6}>
                  <NavLink><Typography variant={'body1'}>About Me</Typography></NavLink>
                  <Typography variant={'body1'}>Experience</Typography>
                  <Typography variant={'body1'}>Projects</Typography>
                  <Typography variant={'body1'}>Contact</Typography>
              </Stack>
          </Toolbar>
      </AppBar>
  )
};

export default NavBar;