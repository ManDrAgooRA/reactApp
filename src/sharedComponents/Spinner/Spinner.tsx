import React, { FC } from 'react';
import { Box, Spinner, Text } from 'grommet';
import './spinner.scss';

export const CustomSpinner: FC = () => {
  return (
    <Box
      align="center"
      direction="row"
      gap="small"
      pad="small"
      key="large"
      className="spinner-wrap"
    >
      <Spinner size="large" />
      <Text size="large" />
    </Box>
  );
};
