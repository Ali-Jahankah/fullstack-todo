import {
  Box,
  Button,
  Stack,
  Typography,
} from '@mui/material';
import React, { FC, ReactElement } from 'react';
import TextFields from '../inputs/TextFields';
import DateInput from '../inputs/DateInput';
import SelectInput from '../inputs/SelectInput';

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
            options={['New', 'Done', 'In Progress']}
            label="Status"
          ></SelectInput>
          <SelectInput
            options={['Easy', 'Challenging', 'Difficult']}
            label="Level"
          ></SelectInput>
        </Stack>
        <Button variant="contained">Submit</Button>
      </Stack>
    </Box>
  );
};

export default TodoForm;
