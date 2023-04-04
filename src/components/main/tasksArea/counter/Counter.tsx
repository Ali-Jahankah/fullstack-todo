import { Avatar, Box, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ICounter } from '../interfaces/ITaskArea';
import PropTypes, { InferProps } from 'prop-types';
import { tasks } from '../enums/tasks';
const Counter: FC<InferProps<ICounter>> = (
  props,
): ReactElement => {
  const { type } = props;

  return (
    <Box>
      <Avatar
        sx={{
          background: 'transparent',
          width: '90px',
          height: '90px',
          border: '5px solid red',
          marginBottom: '1rem',
          borderColor: type.color,
        }}
      >
        <Typography
          color="#fff"
          fontSize="2rem"
          variant="h5"
        >
          {type.count}
        </Typography>
      </Avatar>
      <Typography sx={{ fontWeight: '600' }}>
        {type.task}
      </Typography>
    </Box>
  );
};

Counter.propTypes = {
  type: PropTypes.shape({
    task: PropTypes.oneOf(Object.values(tasks)),
    color: PropTypes.string,
    count: PropTypes.number,
  }),
};
export default Counter;
