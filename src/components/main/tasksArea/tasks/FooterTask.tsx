import {
  Box,
  Button,
  FormControlLabel,
  Switch,
} from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { IFooterTask } from '../interfaces/ITaskArea';

const FooterTask: FC<IFooterTask> = ({
  completeHandler,
  progressHandler,
}): ReactElement => {
  return (
    <Box display="flex" justifyContent="space-between">
      <FormControlLabel
        control={
          <Switch
            defaultChecked
            onChange={progressHandler}
          ></Switch>
        }
        label="In progress"
      ></FormControlLabel>
      <Button
        variant="outlined"
        onClick={completeHandler}
        color="success"
        sx={{ fontWeight: 700 }}
      >
        Complete
      </Button>
    </Box>
  );
};

export default FooterTask;