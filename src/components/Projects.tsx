import React from 'react';
import {Button, Stack} from "@mui/material";
import ProjectModal from "./ProjectModal";

const Projects = () => {
    const [openModal, setOpenModal] = React.useState<boolean>(false);
    const [projectName, setProjectName] = React.useState<string>('');

    const handleClick = (projectName: string) => {
        setOpenModal(true);
        setProjectName(projectName);
    };

    return (
        <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} height={'100vh'}>
            <Button sx={{ fontSize: '24px' }} onClick={() => handleClick('informus')}>InformUs</Button>
            <Button sx={{ fontSize: '24px' }} onClick={() => handleClick('bestneighbor')}>Best Neighbor</Button>
            <Button sx={{ fontSize: '24px' }} onClick={() => handleClick('happybday')}>Happy Birthday Tracy</Button>
            <ProjectModal projectName={projectName} openModal={openModal} setOpenModal={setOpenModal} />
        </Stack>
    );
}

export default Projects;