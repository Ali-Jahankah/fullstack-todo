import { Grid } from '@mui/material';
import React, { FC, ReactElement } from 'react';

const TaskArea = () => {
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
    >
      Todos Area
    </Grid>
  );
};

export default TaskArea;
<Grid
  item
  xs={12}
  md={8}
  p={3}
  sx={{
    flex: { xs: 1, sm: 1, md: 1, lg: 1, xl: 1 },
    width: { xs: '100%' },
  }}
>
  Todos Area
</Grid>;
