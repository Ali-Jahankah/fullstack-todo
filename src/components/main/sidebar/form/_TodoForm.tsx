/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  Button,
  Stack,
  Typography,
  Alert,
  AlertTitle,
  LinearProgress,
} from '@mui/material';
import React, { FC, ReactElement, useState } from 'react';
import TextFields from '../inputs/TextFields';
import DateInput from '../inputs/DateInput';
import SelectInput from '../inputs/SelectInput';
import { Status, Level } from '../interfaces/ISelect';
import { useMutation } from '@tanstack/react-query';
import { ICreateTask } from '../interfaces/IRequests';
import { sendRequest } from '../../../../helpers/sendApiReqs';
const TodoForm: FC = (): ReactElement => {
  const [title, setTitle] = useState<null | string>('');
  const [desc, setDesc] = useState<null | string>('');
  const [date, setDate] = useState<Date | null>(new Date());
  const [status, setStatus] = useState<string>(Status.new);
  const [level, setLevel] = useState<string>(Level.easy);

  const createTaskMutation = useMutation(
    (data: ICreateTask) =>
      sendRequest(
        'http://localhost:4000/tasks/new-task',
        'Post',
        data,
      ),
  );
  const createTaskHandler = () => {
    if (!title || !desc || !date) {
      return alert('Please fill all the inputs!');
    }
    const newTask: ICreateTask = {
      title,
      description: desc,
      date: date.toString(),
      status,
      level,
    };
    createTaskMutation.mutate(newTask);
  };

  return (
    <Box>
      <Typography variant="h6" m={3}>
        Create a new task
      </Typography>
      <Alert
        severity="success"
        sx={{
          margin: '1em auto',
          width: '100%',
        }}
      >
        <AlertTitle>Success!</AlertTitle>
        New Todo Added!
      </Alert>
      <Stack spacing={2}>
        <TextFields
          title={title}
          desc={desc}
          setTitle={(e) => setTitle(e.target.value)}
          setDesc={(e) => setDesc(e.target.value)}
        ></TextFields>
        <DateInput
          value={date}
          onChange={(val) => setDate(val)}
        ></DateInput>
        <Stack direction="row" spacing={2}>
          <SelectInput
            options={[
              Status.new,
              Status.inProgress,
              Status.completed,
            ]}
            label="Status"
            value={status}
            onChange={(e) =>
              setStatus(e.target.value as string)
            }
          ></SelectInput>
          <SelectInput
            options={[
              Level.easy,
              Level.challenging,
              Level.difficult,
            ]}
            label="Level"
            value={level}
            onChange={(e) =>
              setLevel(e.target.value as string)
            }
          ></SelectInput>
        </Stack>
        <LinearProgress></LinearProgress>
        <Button variant="contained" size="large" fullWidth>
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default TodoForm;
