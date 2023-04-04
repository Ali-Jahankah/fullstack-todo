import { Box } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import HeaderTask from './HeaderTask';
import BodyTask from './BodyTask';
import FooterTask from './FooterTask';

const Task: FC = (): ReactElement => {
  return (
    <Box
      p={2}
      border="1px solid"
      borderColor="warning.light"
      borderRadius="8px"
    >
      <HeaderTask></HeaderTask>
      <BodyTask></BodyTask>
      <FooterTask></FooterTask>
    </Box>
  );
};

export default Task;
