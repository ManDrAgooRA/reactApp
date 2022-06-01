import React, { FC } from 'react';
import { Box, Layer, Button } from 'grommet';
import { Close } from 'grommet-icons';
import { IAdminModal } from '@/admin/interfaces';
import './adminModal.scss';

export const AdminModal: FC<IAdminModal> = ({
  isOpen,
  handleClose,
  children,
}) => {
  return (
    <Box className="modal-admin">
      {isOpen && (
        <Layer className="modal-wrapper" onClickOutside={() => handleClose()}>
          {children}
          <Button className="modal-close" onClick={handleClose}>
            <Close />
          </Button>
        </Layer>
      )}
    </Box>
  );
};
