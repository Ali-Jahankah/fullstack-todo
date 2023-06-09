import { Box, Button, Grid } from '@mui/material';
import React, { FC, ReactElement, useState } from 'react';
import Profile from './profile/_Profile';
import TodoForm from './form/_TodoForm';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { KeyboardDoubleArrowDown } from '@mui/icons-material';
const Sidebar: FC = (): ReactElement => {
  const [showBar, setShowBar] = useState<boolean>(true);
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
        height: '-webkit-fill-available',
        backgroundColor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        alignSelf: { md: 'normal' },
        padding: {
          xs: '1em',
        },
      }}
      width="100%"
      py={0}
    >
      <Box
        sx={{
          maxHeight: `${!showBar ? '0vh' : '500vh'}`,
          overflow: 'hidden',
          transition: '1.4s all',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Profile name="Ali Jahankah"></Profile>
        <TodoForm></TodoForm>
      </Box>

      <Button
        sx={{
          margin: '0em auto',
        }}
        onClick={() => setShowBar(!showBar)}
      >
        {showBar ? (
          <KeyboardDoubleArrowUpIcon
            fontSize="large"
            color="error"
          ></KeyboardDoubleArrowUpIcon>
        ) : (
          <KeyboardDoubleArrowDown
            fontSize="large"
            color="error"
          ></KeyboardDoubleArrowDown>
        )}
      </Button>
    </Grid>
  );
};

export default Sidebar;
