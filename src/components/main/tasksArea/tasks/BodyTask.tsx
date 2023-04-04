import { Box, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { IBodyTask } from '../interfaces/ITaskArea';

const BodyTask: FC<IBodyTask> = ({
  description = 'This is a description test',
}): ReactElement => {
  return (
    <Box my={2}>
      <Typography
        fontSize="1rem"
        sx={{ textAlign: 'left' }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default BodyTask;
