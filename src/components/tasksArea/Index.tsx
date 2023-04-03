import React, { FC, ReactElement } from 'react';
import {
  Avatar,
  Box,
  Grid,
  Typography,
} from '@mui/material';
import { format } from 'date-fns';
import Counter from './Counter';
const TaskArea: FC = (): ReactElement => {
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

      <Box display="flex" justifyContent="space-between">
        <Counter></Counter>
        <Counter></Counter>
        <Counter></Counter>
      </Box>
    </Grid>
  );
};

export default TaskArea;
