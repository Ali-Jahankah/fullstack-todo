import React, { ReactElement, FC, useState } from 'react';
import {
  DatePicker,
  LocalizationProvider,
} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { IDate } from './interfaces/IDate';
const DateInput: FC<IDate> = (props) => {
  const [value, setValue] = useState<Date | null>(
    new Date(),
  );
  console.log(value);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        value={value}
        onChange={(val) => setValue(val)}
      ></DatePicker>
    </LocalizationProvider>
  );
};

export default DateInput;
