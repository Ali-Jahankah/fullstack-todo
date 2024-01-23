/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';
import { Level, Status } from '../interfaces/ISelect';
import React, {
  FC,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  useMutation,
  useQuery,
} from '@tanstack/react-query';

import DateInput from '../inputs/DateInput';
import { ICreateTask } from '../interfaces/IRequests';
import SelectInput from '../inputs/SelectInput';
import TextFields from '../inputs/TextFields';
import { UpdateStatusContext } from '../../../../context/updateStatusConext/UpdateTaskContext';
import { sendRequest } from '../../../../helpers/sendApiReqs';

const TodoForm: FC = (): ReactElement => {
  const [title, setTitle] = useState<null | string>('');
  const [desc, setDesc] = useState<null | string>('');
  const [date, setDate] = useState<Date | null>(new Date());
  const [status, setStatus] = useState<string>(Status.new);
  const [level, setLevel] = useState<string>(Level.easy);
  const [success, setSuccess] = useState<boolean>(false);

  const context = useContext(UpdateStatusContext);
  const url = window.location.hostname === 'localhost' ?  'http://localhost:4001/api' : 'https://uaral-server.netlify.app/api';
  const createTaskMutation = useMutation(
    (data: ICreateTask) =>
      sendRequest(
        url + '/tasks/new-task',
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

  useEffect(() => {
    if (createTaskMutation.isSuccess) {
      setSuccess(true);
      context.toggle();
    }
    const showMessage = setTimeout(() => {
      setSuccess(false);
    }, 4000);
    return () => {
      clearTimeout(showMessage);
    };
  }, [createTaskMutation.isSuccess]);
  return (
    <Box>
      <Typography variant="h6" m={3}>
        Create a new task
      </Typography>
      {success && (
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
      )}
      <Stack spacing={2}>
        <TextFields
          title={title}
          desc={desc}
          setTitle={(e) => setTitle(e.target.value)}
          setDesc={(e) => setDesc(e.target.value)}
          disabled={createTaskMutation.isLoading}
        ></TextFields>
        <DateInput
          value={date}
          onChange={(val) => setDate(val)}
          disabled={createTaskMutation.isLoading}
        ></DateInput>
        <Stack direction="row" spacing={2}>
          <SelectInput
            disabled={createTaskMutation.isLoading}
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
            disabled={createTaskMutation.isLoading}
            value={level}
            onChange={(e) =>
              setLevel(e.target.value as string)
            }
          ></SelectInput>
        </Stack>
        {createTaskMutation.isLoading && (
          <LinearProgress></LinearProgress>
        )}
        <Button
          onClick={(e) => {
            e.preventDefault();
            createTaskHandler();
          }}
          variant="contained"
          size="large"
          fullWidth
          disabled={
            !title ||
            !desc ||
            !date ||
            !status ||
            !level ||
            createTaskMutation.isLoading
          }
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default TodoForm;
