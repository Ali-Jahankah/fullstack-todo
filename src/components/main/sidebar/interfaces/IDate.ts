import { IDisabled } from './IDisabled';

export interface IDate extends IDisabled {
  value?: null | Date;
  onChange?: (val: null | Date) => void;
}
