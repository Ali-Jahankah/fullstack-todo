import {
  Box,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { FC, ReactElement } from 'react';

const TodoForm: FC = (): ReactElement => {
  return (
    <Box>
      <Typography variant="h6" m={3}>
        Create a new task
      </Typography>
      <Stack spacing={2}>
        <TextField
          id="title"
          label="title"
          placeholder="title"
          fullWidth
          variant="filled"
          required
          size="small"
        ></TextField>
        <TextField
          id="description"
          name="description"
          label="description"
          placeholder="Description"
          fullWidth
          variant="filled"
          required
          multiline
          rows={4}
        ></TextField>
      </Stack>
    </Box>
  );
};

export default TodoForm;
