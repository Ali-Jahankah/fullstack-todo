import { Box, Avatar, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
interface IUser {
  name: string;
}
const Profile: FC<IUser> = (props): ReactElement => {
  const { name = 'Ali Jahankah' } = props;
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
          width: 80,
          height: 80,
        }}
      />
      <Typography variant="h5">{name}</Typography>
      <Typography
        variant="h6"
        sx={{ color: 'grey.300', fontSize: '1rem' }}
      >
        Software Engineer | London
      </Typography>
    </Box>
  );
};
Profile.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Profile;
