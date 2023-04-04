import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import React, { ReactElement, FC } from 'react';
import { ISelect } from '../interfaces/ISelect';

const SelectInput: FC<ISelect> = (props): ReactElement => {
  const {
    options,
    label,
    onChange = (e) => console.log(e),
  } = props;
  return (
    <FormControl fullWidth size="small">
      <InputLabel id={`${label}Label`}>{label}</InputLabel>
      <Select
        id={label}
        labelId={`${label}Label`}
        label={label}
        value=""
        onChange={onChange}
      >
        {options?.map(
          (item, index) =>
            (
              <MenuItem value="New" key={index}>
                {item}
              </MenuItem>
            ) as JSX.Element,
        )}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
