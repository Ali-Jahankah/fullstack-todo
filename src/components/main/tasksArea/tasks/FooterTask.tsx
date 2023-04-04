import {
  Box,
  Button,
  FormControlLabel,
  Switch,
} from '@mui/material';
import React, { FC, ReactElement } from 'react';

const FooterTask: FC = (): ReactElement => {
  return (
    <Box display="flex" justifyContent="space-between">
      <FormControlLabel
        control={<Switch defaultChecked></Switch>}
        label="In progress"
      ></FormControlLabel>
      <Button
        variant="outlined"
        color="success"
        sx={{ fontWeight: 700 }}
      >
        Complete
      </Button>
    </Box>
  );
};

export default FooterTask;
