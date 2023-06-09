import React, { FC, ReactElement } from 'react';

import Sidebar from '../../components/main/sidebar/Sidebar';
import TaskArea from '../../components/main/tasksArea/TaskArea';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { Grid } from '@mui/material';

const Dashboard: FC = (): ReactElement => {
  return (
    <Grid
      container
      minHeight="100vh"
      sx={{
        flexDirection: 'column',
        textAlign: 'center',
      }}
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
