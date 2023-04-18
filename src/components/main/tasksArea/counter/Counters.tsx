import React, { FC, ReactElement } from 'react';
import Counter from './Counter';
import { Status } from '../enums/tasks';
import { Box } from '@mui/material';
const Counters: FC = (): ReactElement => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Counter
        type={{
          color: 'error.light',
          task: Status.new,
          count: 0,
        }}
      ></Counter>
      <Counter
        type={{
          color: 'success.light',
          task: Status.completed,
          count: 0,
        }}
      ></Counter>
      <Counter
        type={{
          color: 'warning.light',
          task: Status.inProgress,
          count: 0,
        }}
      ></Counter>
    </Box>
  );
};

export default Counters;
