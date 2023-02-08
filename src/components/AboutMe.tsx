import React from 'react';
import {Link, Stack, Typography} from "@mui/material";

const AboutMe = () => {
    return (
        <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} height={'100vh'} spacing={4}>
            <Stack direction={'column'} width={'30%'}>
                <Typography variant={'body1'}>
                    Hello 😊 my name is Kim and I Live Laugh Love all things on the internet. I was born and raised in Hawaii but am currently located in NYC.
                    My journey started in 2019 when I decided to self-learn Python during my off hours of working
                    as an EMT. I immediately fell in love with turning code into real life applications.
                    I later enrolled to <a href={'https://hackbrightacademy.com/'} target={'_blank'}>Hackbright</a>,
                    an all-women coding bootcamp located in San Francisco. Fast forward to today, and I've had the
                    privilege of working and learning on my own projects and
                    at <a href={'https://www.getcorrelated.com/'} target={'_blank'}>Correlated</a>.
                </Typography>
                <br />
                <Typography>
                    My hobbies include learning incredibly niche internet subcultures, listening
                    to <a href={'https://www.instagram.com/yeahbutstillpod/?hl=en'} target={'_blank'}>comedy podcasts</a>,
                    endlessly scrolling through <a href={'https://shopgoodwill.com/'} target={'_blank'}>Goodwill</a> and
                    currently learning <a href={'https://www.youtube.com/watch?v=zLSaApeG-vY'} target={'_blank'}>how to knit</a>!
                </Typography>
            </Stack>
            <img src={'pic.png'} style={{ border: '1px solid black', borderRadius: 8, height: '50%' }}/>
        </Stack>
    );
};

export default AboutMe;