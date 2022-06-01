import React, { FC } from 'react';
import { Box, Button, Layer, Text } from 'grommet';
import { IModal } from '@/interfaces/IModal';

export const Modal: FC<IModal> = ({ isOpen, message, handleClose }) => {
  return (
    <Box>
      {isOpen && (
        <Layer
          id="hello world"
          position="center"
          onClickOutside={handleClose}
          onEsc={handleClose}
        >
          <Box pad="medium" gap="small" width="medium">
            <Text>{message}</Text>
            <Box
              as="footer"
              gap="small"
              direction="row"
              align="center"
              justify="end"
              pad={{ top: 'medium', bottom: 'small' }}
            >
              <Button
                label={
                  <Text color="white">
                    <strong>close</strong>
                  </Text>
                }
                onClick={handleClose}
                primary
                color="status-critical"
              />
            </Box>
          </Box>
        </Layer>
      )}
    </Box>
  );
};
