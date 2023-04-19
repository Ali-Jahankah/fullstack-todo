import {
  Box,
  Button,
  FormControlLabel,
  Switch,
} from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { IFooterTask } from '../interfaces/ITaskArea';
import { Status } from '../enums/tasks';

const FooterTask: FC<IFooterTask> = ({
  completeHandler,
  progressHandler,
  status,
  id,
  setBg,
}): ReactElement => {
  return (
    <Box display="flex" justifyContent="space-between">
      <FormControlLabel
        control={
          <Switch
            defaultChecked={
              status === Status.new ? false : true
            }
            onChange={(e) => {
              id && progressHandler(e, id);
              setBg(
                e.target.checked
                  ? 'customColor.main'
                  : 'customColor.paper',
              );
            }}
          ></Switch>
        }
        label="In progress"
      ></FormControlLabel>
      <Button
        variant="outlined"
        onClick={() => id && completeHandler(id)}
        color="success"
        sx={{ fontWeight: 700 }}
      >
        Complete
      </Button>
    </Box>
  );
};

export default FooterTask;
