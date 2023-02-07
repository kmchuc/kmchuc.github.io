import React from 'react';
import {Box, Divider, Link, Stack, Typography} from "@mui/material";

const Home = () => {
    return(
        <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} margin={15} spacing={4}>
            <Stack direction={'column'} width={'40%'} spacing={2}>
                <Box>
                    <Typography variant={'h2'}>Hi, my name is</Typography>
                    <Typography variant={'h2'}>Kimberly Chuc</Typography>
                </Box>
                <Divider />
                <Typography variant={'body1'}>I'm a Software Engineer currently based in NYC and specialize in creating unique digital experiences.
                    I'm currently helping build <Link href={'https://www.getcorrelated.com/'}>Correlated</Link>, a B2B Saas tool that helps revenue teams identify and nurture product-qualified leads.</Typography>
            </Stack>
        </Stack>
    );
};

export default Home;