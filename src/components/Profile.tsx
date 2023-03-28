import { Box, Avatar, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';

const Profile: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <Avatar
        alt="Ali's Photo"
        src="/img/profile.jpeg"
        sx={{
          width: 100,
          height: 100,
        }}
      />
      <Typography variant="h5">Ali Jahankah</Typography>
      <Typography variant="h6" sx={{ color: 'grey.300' }}>
        Software Engineer | London
      </Typography>
    </Box>
  );
};

export default Profile;
