import {
  Box,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { FC, ReactElement } from 'react';
import TextFields from './TextFields';
import DateInput from './DateInput';

const TodoForm: FC = (): ReactElement => {
  return (
    <Box>
      <Typography variant="h6" m={3}>
        Create a new task
      </Typography>
      <Stack spacing={2}>
        <TextFields></TextFields>
        <DateInput></DateInput>
      </Stack>
    </Box>
  );
};

export default TodoForm;
