import React, { FC, ReactElement } from 'react';

import Sidebar from '../../components/sidebar/Index';
import TaskArea from '../../components/tasksArea/Index';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Grid } from '@mui/material';

const Dashboard: FC = (): ReactElement => {
  return (
    <Grid
      container
      minHeight="100vh"
      sx={{ flexDirection: 'column', textAlign: 'center' }}
    >
      <Header></Header>
      <Grid
        container
        item
        flex={1}
        sx={{
          flexDirection: {
            xs: 'column-reverse',
            sm: 'column-reverse',
            md: 'row',
          },
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'baseline',
        }}
      >
        <TaskArea />
        <Sidebar />
      </Grid>
      <Footer></Footer>
    </Grid>
  );
};

export default Dashboard;
