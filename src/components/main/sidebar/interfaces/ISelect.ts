import { SelectChangeEvent } from '@mui/material';
import { IDisabled } from './IDisabled';

export enum Status {
  new = 'New',
  inProgress = 'In Progress',
  completed = 'Completed',
}
export enum Level {
  easy = 'Easy',
  challenging = 'Challenging',
  difficult = 'Difficult',
}
export interface ISelect extends IDisabled {
  options?: Status[] | Level[];
  value: string;
  label?: string;
  onChange?: (e: SelectChangeEvent) => void;
}
