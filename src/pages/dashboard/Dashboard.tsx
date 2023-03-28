import React, { FC, ReactElement } from 'react';
import {
  Grid,
  AppBar,
  Toolbar,
  Box,
  Typography,
} from '@mui/material';
import SideBar from '../../components/Sidebar';
import TaskArea from '../../components/TaskArea';
const Dashboard: FC = (): ReactElement => {
  const bgColor = {
    background:
      'linear-gradient(to right, #ff5858, #9a94e3)',
  };
  return (
    <Grid
      container
      minHeight="100vh"
      sx={{ flexDirection: 'column', textAlign: 'center' }}
    >
      <Grid xs={12} container item>
        <AppBar position="static">
          <Toolbar sx={bgColor}>
            <Box
              component="img"
              src="/img/logo.png"
              alt="flying v guitar"
              sx={{
                maxWidth: '100px',
              }}
            />
            <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                flex: 1,
                color: 'black',
              }}
              mx={2}
            >
              Full-Stack Todo
            </Typography>
          </Toolbar>
        </AppBar>
      </Grid>

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
        <SideBar />
      </Grid>

      <Grid
        xs={12}
        item
        sx={{ ...bgColor, color: 'black' }}
        p={1}
      >
        <Typography variant="h6">
          Created By Ali Jahankah - 2023
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
