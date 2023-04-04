import React, { ReactElement, FC, useState } from 'react';
import {
  DatePicker,
  LocalizationProvider,
} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { IDate } from '../interfaces/IDate';
import PropTypes from 'prop-types';

const DateInput: FC<IDate> = (props): ReactElement => {
  const [date, setDate] = useState<Date | null>(null);
  const {
    value = new Date(),
    onChange = (val) => setDate(val),
    disabled = false,
  } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="DatePicker"
        format="dd/MM/yyyy"
        value={value}
        onChange={onChange}
        disabled={disabled}
      ></DatePicker>
    </LocalizationProvider>
  );
};
DateInput.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
};
export default DateInput;
