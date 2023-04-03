import {
  AppBar,
  Box,
  Grid,
  Toolbar,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { FC, ReactElement } from 'react';
import { keyframes } from '@mui/system';

const anim = keyframes`
    0% {
      -webkit-transform:rotate(-45deg),
      -ms-transform:rotate(-45deg),
      -o-transform:rotate(-45deg),
      transform: rotate(-45deg)
    }
    25% {
      -webkit-transform:rotate(0deg),
      -ms-transform:rotate(0deg),
      -o-transform:rotate(0deg),
      transform: rotate(0deg)
    }
    50%{
      -webkit-transform:rotate(45deg),
      -ms-transform:rotate(45deg),
      -o-transform:rotate(45deg),
      transform:rotate(45deg)
    }
    75%{
      -webkit-transform:rotate(0deg),
      -ms-transform:rotate(0deg),
      -o-transform:rotate(0deg),
      transform:rotate(0deg)
    }
    100%{
      -webkit-transform:rotate(-45deg),
      -ms-transform:rotate(-45deg),
      -o-transform:rotate(-45deg),
      transform:rotate(-45deg)
    }
   
`;
const NewBox = styled(Box)({
  animation: `${anim} 6s linear infinite`,
});
const Header: FC = (): ReactElement => {
  const bgColor = {
    background:
      'linear-gradient(to right, #ff5858, #9a94e3)',
  };

  return (
    <Grid xs={12} container item>
      <AppBar position="static">
        <Toolbar sx={bgColor}>
          <NewBox>
            <Box
              component="img"
              src="/img/logo.png"
              alt="flying v guitar"
              sx={{
                maxWidth: '140px',
                rotate: '-90deg',
                transform:
                  'translateX(-50px) translateY(0px)',
              }}
            />
          </NewBox>
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
