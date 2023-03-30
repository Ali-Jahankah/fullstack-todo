import {
  Box,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { FC, ReactElement } from 'react';
import TextFields from './TextFields';

const TodoForm: FC = (): ReactElement => {
  return (
    <Box>
      <Typography variant="h6" m={3}>
        Create a new task
      </Typography>

      <TextFields></TextFields>
    </Box>
  );
};

export default TodoForm;
