import { TextField } from '@mui/material';
import React, { ReactElement, FC } from 'react';
import { ITextField } from './interfaces/ITesxtField';
import PropTypes from 'prop-types';
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
DescriptionInput.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
export default DescriptionInput;
