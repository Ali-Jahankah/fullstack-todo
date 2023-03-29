import { Grid } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import Profile from './_Profile';
import TodoForm from './_TodoForm';

const Sidebar: FC = (): ReactElement => {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={4}
      sx={{
        position: { md: 'sticky' },
        right: { md: '0px' },
        top: { md: '0px' },

        backgroundColor: 'background.paper',
        height: { md: '100%' },
        width: { xs: '100%' },

        flex: { xs: 1, sm: 1, md: 1, lg: 1, xl: 1 },
      }}
      p={3}
      width="100%"
    >
      <Profile name="Ali Jahankah"></Profile>
      <TodoForm></TodoForm>
    </Grid>
  );
};

export default Sidebar;
