import {
  AppBar,
  Box,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { FC, ReactElement } from 'react';

const Header = () => {
  const bgColor = {
    background:
      'linear-gradient(to right, #ff5858, #9a94e3)',
  };
  return (
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
  );
};

export default Header;
