import { Status, Level } from './ISelect';

export interface IData {
  msg: string;
  data: IResponse[];
}
export interface IResponse {
  id: string;
  title: string;
  date: string;
  description: string;
  status: `${Status}`;
  level: `${Level}`;
}
