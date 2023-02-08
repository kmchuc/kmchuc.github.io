import React from 'react';
import {Box, Divider, Link, Stack, Typography} from "@mui/material";

const Home = () => {
    return(
        <Stack direction={'column'} alignItems={'center'} margin={15} spacing={4}>
            <Stack direction={'column'} width={'40%'} spacing={2}>
                <Box>
                    <Typography variant={'h2'}>Hi, my name is</Typography>
                    <Typography variant={'h2'}>Kimberly Chuc</Typography>
                </Box>
                <Divider />
                <Typography variant={'body1'}>I'm a Software Engineer currently based in NYC and specialize in creating unique digital experiences.
                    I'm currently helping build <Link href={'https://www.getcorrelated.com/'}>Correlated</Link>, a B2B Saas tool that helps revenue teams identify and nurture product-qualified leads.</Typography>
            </Stack>
            <Stack direction={'row'} width={'35vw'} justifyContent={'flex-end'} spacing={4}>
                <Link target={'_blank'} href={`mailto:kimmchuc@gmail.com`}><img src={'mail.svg'}/></Link>
                <Link target={'_blank'} href={'https://github.com/kmchuc'}><img src={'github.svg'}/></Link>
                <Link target={'_blank'} href={'https://www.linkedin.com/in/kimberlymchuc/'}><img src={'linkedin.svg'}/></Link>
            </Stack>
        </Stack>
    );
};

export default Home;