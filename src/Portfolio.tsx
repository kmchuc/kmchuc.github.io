import React from 'react';
import {Container, CssBaseline, Stack} from "@mui/material";
import NavBar from "./components/NavBar";
import AppRouter from "./AppRouter";

function Portfolio() {
  return (
      <React.Fragment>
          <CssBaseline />
          <Container maxWidth={false} disableGutters sx={{ bgcolor: '#B4CDE6', height: '100vh' }}>
              <Stack direction={'column'} height={'100vh'}>
                  <NavBar />
                  <AppRouter />
              </Stack>
          </Container>
      </React.Fragment>
  );
}

export default Portfolio;
