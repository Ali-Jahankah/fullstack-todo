import React, { FC, ReactElement } from 'react';
import { Grid } from '@mui/material';

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
      Todos Area
    </Grid>
  );
};

export default TaskArea;
