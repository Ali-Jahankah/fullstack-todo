import {
  Alert,
  AlertTitle,
  Box,
  Grid,
  LinearProgress,
  Typography,
} from '@mui/material';
import {
  IData,
  IResponse,
} from '../sidebar/interfaces/IResponse';
import React, {
  FC,
  ReactElement,
  useContext,
  useEffect,
} from 'react';
import {
  useMutation,
  useQuery,
} from '@tanstack/react-query';

import Counters from './counter/Counters';
import { IStatusUpdate } from './interfaces/ITaskArea';
import { Status } from './enums/tasks';
import Task from './tasks/Task';
import { UpdateStatusContext } from '../../../context/updateStatusConext/UpdateTaskContext';
import { format } from 'date-fns';
import { sendRequest } from '../../../helpers/sendApiReqs';

const TaskArea: FC = (): ReactElement => {
  // const [force, setForce] = useState<number>(0);
  const url = process.env.REACT_APP_HOST_NAME;
  const context = useContext(UpdateStatusContext);
  const { error, isLoading, data, refetch } = useQuery(
    ['tasks'],
    async () => {
      try {
        return await sendRequest<IData>(
          url + '/tasks',
          'Get',
        )
      } catch (error) {
        console.log(error);
      }
     
    },
  );
  const mutateHandler = useMutation(
    (data: IStatusUpdate) => {
      return sendRequest(
        url+ '/tasks/update-task',
        'Put',
        data,
      );
    },
  );
  useEffect(() => {

    if (mutateHandler.isSuccess) {
      context.toggle();
      console.log('refetch()()()()()(')
      refetch()

    }
  }, [mutateHandler.isSuccess]);
  const completeHandler = (id: string) => {
    mutateHandler.mutate({
      id,
      status: Status.completed,
    });
  };
  const updateHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
   const test = mutateHandler.mutate({
      id,
      status: e.target.checked
        ? Status.inProgress
        : Status.new,
    });
    return test
  }
   


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
      {data && <Counters tasks={data}></Counters>}
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
                (item: IResponse, index) =>
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
