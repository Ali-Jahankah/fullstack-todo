import { Grid } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import Profile from './Profile';

const SideBar: FC = (): ReactElement => {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={4}
      sx={{
        position: { md: 'fixed' },
        right: { md: '0px' },
        top: { md: '64px' },
        bottom: { md: '-60px' },
        backgroundColor: 'background.paper',
        height: { md: '100%' },
        width: { xs: '100%' },
        zIndex: { md: '-1' },
        flex: { xs: 1, sm: 1, md: 1, lg: 1, xl: 1 },
      }}
      p={3}
      width="100%"
    >
      <Profile></Profile>
    </Grid>
  );
};

export default SideBar;
