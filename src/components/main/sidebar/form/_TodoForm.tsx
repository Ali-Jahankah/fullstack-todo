/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  Button,
  Stack,
  Typography,
} from '@mui/material';
import React, { FC, ReactElement, useState } from 'react';
import TextFields from '../inputs/TextFields';
import DateInput from '../inputs/DateInput';
import SelectInput from '../inputs/SelectInput';
import { Status, Level } from '../interfaces/ISelect';

const TodoForm: FC = (): ReactElement => {
  const [title, setTitle] = useState<undefined | string>(
    undefined,
  );
  const [desc, setDesc] = useState<undefined | string>(
    undefined,
  );
  const [date, setDate] = useState<Date>(new Date());
  const [status, setStatus] = useState<string>(Status.new);
  const [level, setLevel] = useState<string>(Level.easy);
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
            options={[
              Status.new,
              Status.inProgress,
              Status.completed,
            ]}
            label="Status"
          ></SelectInput>
          <SelectInput
            options={[
              Level.easy,
              Level.challenging,
              Level.difficult,
            ]}
            label="Level"
          ></SelectInput>
        </Stack>
        <Button variant="contained" size="large" fullWidth>
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default TodoForm;
