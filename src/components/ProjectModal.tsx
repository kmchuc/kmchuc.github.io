import React from 'react';
import {Modal, Box} from "@mui/material";

type ProjectModalProps = {
    projectName: string;
    openModal: boolean;
    setOpenModal: (open: boolean) => void;
}

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'black',
    width: 400,
};

const ProjectModal = ({ projectName, openModal, setOpenModal }: ProjectModalProps) => {
    const handleClose = () => {
        setOpenModal(false);
    }

    return (
        <Modal open={openModal} onClose={handleClose}>
            <Box sx={modalStyle}>

            </Box>
        </Modal>
    );
}

export default ProjectModal;