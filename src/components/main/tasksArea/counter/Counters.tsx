import React, { FC, ReactElement } from 'react';
import Counter from './Counter';
import { Status } from '../enums/tasks';
import { Box } from '@mui/material';
import { taskCounter } from '../../../../helpers/taskCounter';
import {
  IData,
  IResponse,
} from '../../sidebar/interfaces/IResponse';

interface Props {
  tasks: IData;
}

const Counters: FC<Props> = ({ tasks }): ReactElement => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Counter
        type={{
          color: 'error.light',
          task: Status.new,
          count: taskCounter(tasks, Status.new),
        }}
      ></Counter>
      <Counter
        type={{
          color: 'success.light',
          task: Status.completed,
          count: taskCounter(tasks, Status.completed),
        }}
      ></Counter>
      <Counter
        type={{
          color: 'warning.light',
          task: Status.inProgress,
          count: taskCounter(tasks, Status.inProgress),
        }}
      ></Counter>
    </Box>
  );
};

export default Counters;
