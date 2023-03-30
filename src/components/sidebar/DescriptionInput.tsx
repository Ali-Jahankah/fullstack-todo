import { TextField } from '@mui/material';
import React, { ReactElement, FC } from 'react';
import { ITextField } from './interfaces/ITesxtField';

const DescriptionInput: FC<ITextField> = (
  props,
): ReactElement => {
  const {
    onChange = (e) => console.log(e.target.value),
    disabled = false,
  } = props;
  return (
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
      disabled={disabled}
      onChange={onChange}
    ></TextField>
  );
};

export default DescriptionInput;
