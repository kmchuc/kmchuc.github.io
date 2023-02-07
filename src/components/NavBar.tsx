import React from 'react';
import {AppBar, Stack, Toolbar} from "@mui/material";
import NavBarLink from "./NavBarLink";

const NavBar = () => {
  return (
      <AppBar position={'static'} color={'transparent'} sx={{ boxShadow:'none' }}>
          <Toolbar disableGutters sx={{ justifyContent: 'space-around' }}>
              <Stack direction={'row'} spacing={6}>
                  <NavBarLink endpoint={'/'} title={'Home'} />
                  <NavBarLink endpoint={'/about'} title={'About Me'} />
                  <NavBarLink endpoint={'/projects'} title={'Projects'} />
                  <NavBarLink endpoint={'/contact'} title={'Contact'} />
              </Stack>
          </Toolbar>
      </AppBar>
  )
};

export default NavBar;