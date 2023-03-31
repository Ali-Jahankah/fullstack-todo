import {
  Box,
  Button,
  Stack,
  Typography,
} from '@mui/material';
import React, { FC, ReactElement } from 'react';
import TextFields from './TextFields';
import DateInput from './DateInput';
import SelectInput from './SelectInput';

const TodoForm: FC = (): ReactElement => {
  return (
    <Box>
      <Typography variant="h6" m={3}>
        Create a new task
      </Typography>
      <Stack spacing={2}>
        <TextFields></TextFields>
        <DateInput></DateInput>
        <Stack direction="row" spacing={2}>
          <SelectInput
            options={['New', 'Done', 'Onboard']}
            label="Status"
          ></SelectInput>
          <SelectInput
            options={['Easy', 'Medium', 'Difficult']}
            label="Level"
          ></SelectInput>
        </Stack>
        <Button variant="contained">Submit</Button>
      </Stack>
    </Box>
  );
};

export default TodoForm;
