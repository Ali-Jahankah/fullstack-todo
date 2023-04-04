import { Box } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import HeaderTask from './HeaderTask';
import BodyTask from './BodyTask';
import FooterTask from './FooterTask';
import { ITask } from '../interfaces/ITaskArea';

const Task: FC<ITask> = (props): ReactElement => {
  const {
    title,
    description,
    date,
    status,
    level,
    completeHandler,
    progressHandler,
  } = props;
  return (
    <Box
      p={2}
      border="1px solid"
      borderColor={
        level === 'Easy'
          ? 'success.light'
          : level === 'Challenging'
          ? 'warning.light'
          : 'error.light'
      }
      borderRadius="8px"
      sx={{
        backgroundColor:
          status === 'New'
            ? 'background.paper'
            : status === 'In Progress'
            ? 'customColor.main'
            : 'customColor.light',
      }}
    >
      <HeaderTask title={title} date={date}></HeaderTask>
      <BodyTask description={description}></BodyTask>
      <FooterTask
        completeHandler={completeHandler}
        progressHandler={progressHandler}
        status={status}
      ></FooterTask>
    </Box>
  );
};

export default Task;
