import React from 'react';
import { Modal as MUIModal, Box } from '@mui/material';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <MUIModal open={open} onClose={onClose}>
      <Box sx={{ ...style, width: 400 }}>
        {children}
      </Box>
    </MUIModal>
  );
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default Modal;
