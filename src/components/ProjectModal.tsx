import React from 'react';
import {Modal, Stack, Typography, Box, Link} from "@mui/material";

type ProjectModalProps = {
    projectName: string;
    openModal: boolean;
    setOpenModal: (open: boolean) => void;
    projectImg: string;
    projectUrl?: string;
    projectDescription: string;
}

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#90B77D',
    width: '70vw',
    height: '70vh',
    borderRadius: 4,
    p: 4,
};

const ProjectModal = ({ projectName, openModal, setOpenModal, projectImg, projectUrl, projectDescription }: ProjectModalProps) => {
    const handleClose = () => {
        setOpenModal(false);
    }

    return (
        <Modal open={openModal} onClose={handleClose}>
            <Stack sx={modalStyle}>
                <Stack height={'100%'}>
                    <Box alignSelf={'center'}>
                        {projectUrl ?
                            (<Link href={projectUrl} target={'_blank'}><Typography variant={'h5'}>{projectName}</Typography></Link>)
                            :
                            (<Typography variant={'h5'}>{projectName}</Typography>)
                        }
                    </Box>
                    <Stack height={'100%'} direction={'row'} alignItems={'center'} spacing={4}>
                            <img src={projectImg} width={'40%'}/>
                        <Typography variant={'body1'}>{projectDescription}</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Modal>
    );
}

export default ProjectModal;