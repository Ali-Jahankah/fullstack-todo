import { Grid, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';

const Footer = () => {
  const bgColor = {
    background:
      'linear-gradient(to right, #ff5858, #9a94e3)',
  };
  return (
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
  );
};

export default Footer;
