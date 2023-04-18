import React, { FC, ReactElement } from 'react';
import {
  Alert,
  AlertTitle,
  Box,
  Grid,
  LinearProgress,
  Typography,
} from '@mui/material';
import { format } from 'date-fns';
import Counters from './counter/Counters';
import Task from './tasks/Task';
import {
  useQuery,
  useMutation,
} from '@tanstack/react-query';
import { sendRequest } from '../../../helpers/sendApiReqs';
import {
  IData,
  IRsponse,
} from '../sidebar/interfaces/IResponse';
import { IStatusUpdate } from './interfaces/ITaskArea';
import { Status } from './enums/tasks';

const TaskArea: FC = (): ReactElement => {
  const { error, isLoading, data } = useQuery(
    ['tasks'],
    async () => {
      return await sendRequest<IData>(
        'http://localhost:4000/tasks',
        'Get',
      );
    },
  );
  const { mutate } = useMutation((data: IStatusUpdate) => {
    return sendRequest(
      'http://localhost:4000/tasks/update-task',
      'Put',
      data,
    );
  });
  const completeHandler = (id: string) =>
    mutate({
      id,
      status: Status.completed,
    });
  const updateHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) =>
    mutate({
      id,
      status: e.target.checked
        ? Status.inProgress
        : Status.new,
    });
  return (
    <Grid
      item
      xs={12}
      md={8}
      p={3}
      sx={{
        flex: { xs: 1, sm: 1, md: 1, lg: 1, xl: 1 },
        width: { xs: '100%' },
      }}
      alignSelf="normal"
    >
      <Typography variant="h6" mb={4} color="warning.dark">
        Today is {format(new Date(), 'PPPP')}
      </Typography>
      <Counters></Counters>
      <>
        {error && (
          <Alert severity="error">
            <AlertTitle>
              There is an error from the server
            </AlertTitle>
          </Alert>
        )}

        <Box my={5}>
          {data &&
            data.data.length === 0 &&
            !error &&
            !isLoading && (
              <Alert>
                <AlertTitle>
                  There is no tasks todo or in progress! :({' '}
                </AlertTitle>
              </Alert>
            )}

          {data &&
          Array.isArray(data.data) &&
          !error &&
          !isLoading
            ? data.data.map(
                (item: IRsponse, index) =>
                  item.status !== 'Completed' && (
                    <Task
                      id={item.id}
                      key={item.title + index}
                      title={item.title}
                      date={new Date(item.date)}
                      description={item.description}
                      progressHandler={updateHandler}
                      completeHandler={completeHandler}
                      status={item.status}
                      level={item.level}
                    ></Task>
                  ),
              )
            : isLoading &&
              !error && <LinearProgress></LinearProgress>}
        </Box>
      </>
    </Grid>
  );
};

export default TaskArea;
