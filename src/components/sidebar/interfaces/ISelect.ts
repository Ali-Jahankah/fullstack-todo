import { SelectChangeEvent } from '@mui/material';
import { IDisabled } from './IDisabled';

export interface ISelect extends IDisabled {
  options?: string[];
  label?: string;
  onChange?: (e: SelectChangeEvent) => void;
}
