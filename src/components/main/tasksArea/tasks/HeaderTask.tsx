import { Box, Chip, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { IHeaderTask } from '../interfaces/ITaskArea';
import { format } from 'date-fns';
const HeaderTask: FC<IHeaderTask> = ({
  date = new Date(),
  title = 'This is a test title',
}): ReactElement => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography
        variant="h6"
        color="Highlight"
        sx={{ fontSize: '1.2rem' }}
      >
        {title}
      </Typography>
      <Chip
        label={format(date, 'PPP')}
        variant="outlined"
        color="info"
        sx={{ fontWeight: 600 }}
      ></Chip>
    </Box>
  );
};

export default HeaderTask;
