import { TextField } from '@mui/material';
import React, { ReactElement, FC } from 'react';
import { ITextField } from './interfaces/ITesxtField';
import PropTypes from 'prop-types';
const TitleInput: FC<ITextField> = (
  props,
): ReactElement => {
  const {
    disabled = true,
    onChange = (e) => console.log(e.target.value),
  } = props;
  return (
    <TextField
      id="title"
      label="title"
      placeholder="title"
      fullWidth
      variant="filled"
      required
      size="small"
      disabled={disabled}
      onChange={onChange}
    ></TextField>
  );
};
TitleInput.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
export default TitleInput;
