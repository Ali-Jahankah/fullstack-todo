import { Avatar, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ICounter } from './interfaces/ITaskArea';

const Counter: FC<ICounter> = (props): ReactElement => {
  return (
    <Avatar
      sx={{
        background: 'transparent',
        width: '90px',
        height: '90px',
        border: '5px solid red',
        marginBottom: '1rem',
        borderColor: 'warning.light',
      }}
    >
      <Typography color="#fff" fontSize="2rem" variant="h5">
        10
      </Typography>
    </Avatar>
  );
};

export default Counter;
