import React from 'react';
import {Button, Stack, Typography} from "@mui/material";
import ProjectModal from "./ProjectModal";

const Projects = () => {
    const [openModal, setOpenModal] = React.useState<boolean>(false);
    const [projectName, setProjectName] = React.useState<string>('');
    const [projectImg, setProjectImg] = React.useState<string>('');
    const [projectUrl, setProjectUrl] = React.useState<string>('');
    const [projectDescription, setProjectDescription] = React.useState<string>('');

    const informUsDescription =
        'Voter suppression is an ongoing problem within our democratic system.\n' +
        'InformUS is a fullstack web application with a backend written in Python using a Flask\n' +
        'framework and a database structured using PostgreSQL. Users can submit an address and\n' +
        'view nearby polling centers using Google Maps API and Google Civic Information API.\n' +
        'To view comments left by other users for polling centers, double clicking the polling\n' +
        'center\'s marker on the map will open a table at the bottom of the page. For users to leave\n' +
        'comments for a specific polling center, they must create an account. Once logged in,\n' +
        'users can submit comments in the pop-up window by double clicking the polling\n' +
        'center\'s marker.'

    const neighborDescription = 'Through the trials and tribulations that have been brought on by the COVID-19 pandemic, ' +
        'the current environment has made it difficult for at-risk people to leave their homes. ' +
        'Best Neighbor, created for the COVID-19 GLobal Hackathon, is a full stack application built ' +
        'using Python as the backend language along with a Flask backend framework. ' +
        'The database was created using PostgreSQL with a front end framework using jQuery. ' +
        'The front end was styled using Bootstrap, HTML, and CSS.'

    const bdayDescription = 'Since I couldn\'t see my sister for her birthday this year, I decided to use my newfound ' +
        'skills to create a message board for all of her loved ones to leave a message for her on her special day. ' +
        'Happy Birthday Tracy is a full stack web application using a Flask backend framework written in Python and a ' +
        'front end framework using ReactJS and styled using the styled components React library.'


    const handleClick = (projectName: string, projectImg: string, projectUrl: string, description: string) => {
        setOpenModal(true);
        setProjectName(projectName);
        setProjectImg(projectImg);
        setProjectUrl(projectUrl);
        setProjectDescription(description);
    };

    return (
        <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} height={'100vh'} spacing={4}>
            <Button
                variant={'outlined'}
                sx={{ fontSize: '24px' }}
                onClick={() => handleClick(
                    'InformUs',
                    'informus.png',
                    'https://github.com/kmchuc/InformUS',
                    informUsDescription
                )}
            >
                <Typography variant={'body1'} fontSize={'24px'}>InformUs</Typography>
            </Button>
            <Button
                variant={'outlined'}
                sx={{ fontSize: '24px' }}
                onClick={() => handleClick(
                    'Best Neighbor',
                    'bestNeighbor.png',
                    'https://github.com/Hackbright-Covid-19-Hackathon/hack-covid-19',
                    neighborDescription,
                )}
            >
                Best Neighbor
            </Button>
            <Button
                variant={'outlined'}
                sx={{ fontSize: '24px' }}
                onClick={() => handleClick(
                    'Happy Birthday Tracy',
                    'happyBday.png',
                    '',
                    bdayDescription,
                )}
            >
                Happy Birthday Tracy
            </Button>
            <ProjectModal
                projectName={projectName}
                openModal={openModal}
                setOpenModal={setOpenModal}
                projectImg={projectImg}
                projectUrl={projectUrl}
                projectDescription={projectDescription}
            />
        </Stack>
    );
}

export default Projects;