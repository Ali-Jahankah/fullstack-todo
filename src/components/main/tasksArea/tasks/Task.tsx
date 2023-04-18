import { Box } from '@mui/material';
import React, { FC, ReactElement, useState } from 'react';
import HeaderTask from './HeaderTask';
import BodyTask from './BodyTask';
import FooterTask from './FooterTask';
import { ITask } from '../interfaces/ITaskArea';

const Task: FC<ITask> = (props): ReactElement => {
  const {
    id,
    title,
    description,
    date,
    status,
    level,
    completeHandler,
    progressHandler,
  } = props;
  const [bg, setBg] = useState(
    status === 'New'
      ? 'background.paper'
      : 'customColor.main',
  );

  return (
    <Box
      p={2}
      my={2}
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
        backgroundColor: bg,
      }}
    >
      <HeaderTask title={title} date={date}></HeaderTask>
      <BodyTask description={description}></BodyTask>
      <FooterTask
        completeHandler={completeHandler}
        progressHandler={progressHandler}
        status={status}
        id={id}
        setBg={setBg}
      ></FooterTask>
    </Box>
  );
};

export default Task;
