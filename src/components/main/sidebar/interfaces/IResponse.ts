import { Status, Level } from './ISelect';

export interface IData {
  msg: string;
  data: IRsponse[];
}
export interface IRsponse {
  id: string;
  title: string;
  date: string;
  description: string;
  status: `${Status}`;
  level: `${Level}`;
}
