import React, { FC, ReactElement } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { format } from 'date-fns';
import Counters from './counter/Counters';
import Task from './tasks/Task';

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
      <Counters></Counters>
      <Box my={5}>
        <Task
          title="This is a test Title"
          date={new Date()}
          description="This is a test Dscription."
          progressHandler={(e) => console.log(e)}
          completeHandler={(e) => console.log(e)}
          status="New"
          level="Difficult"
        ></Task>
      </Box>
    </Grid>
  );
};

export default TaskArea;
