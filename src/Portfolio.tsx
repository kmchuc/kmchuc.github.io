import React from 'react';
import {Box, Container, CssBaseline, Divider, Link, Stack, Typography} from "@mui/material";
import NavBar from "./NavBar";

function Portfolio() {
  return (
      <React.Fragment>
          <CssBaseline />
          <Container maxWidth={false} disableGutters sx={{ bgcolor: '#B4CDE6', height: '100vh' }}>
              <Stack direction={'column'} height={'100vh'}>
                  <NavBar />
                  <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} margin={15} spacing={4}>
                      <Stack direction={'column'} width={'40%'} spacing={2}>
                          <Box>
                              <Typography variant={'h2'}>Hi, my name is</Typography>
                              <Typography variant={'h2'}>Kimberly Chuc</Typography>
                              <Typography variant={'h4'}>(aka Kim)</Typography>
                          </Box>
                          <Divider />
                          <Typography variant={'body1'}>I'm a Software Engineer currently based in NYC and specialize in creating unique digital experiences.
                          I'm currently helping build <Link href={'https://www.getcorrelated.com/'}>Correlated</Link>, a B2B Saas tool that helps revenue teams identify and nurture product-qualified leads.</Typography>
                      </Stack>
                      <img src={'pic.png'} style={{ border: '1px solid black', borderRadius: 8 }}/>
                  </Stack>
              </Stack>
          </Container>
      </React.Fragment>
  );
}

export default Portfolio;
