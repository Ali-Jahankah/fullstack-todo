import { Dispatch, SetStateAction } from 'react';
import {
  Level,
  Status,
} from './../../sidebar/interfaces/ISelect';

export interface ICounter {
  type: {
    task: `${Level}`;
    color: string;
    count: number;
  };
}
export interface IHeaderTask {
  title?: string;
  date?: Date;
}
export interface IBodyTask {
  description?: string;
}
export interface IFooterTask {
  id?: string;
  progressHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => void;
  completeHandler: (id: string) => void;
  status?: `${Status}`;
  setBg?: Dispatch<SetStateAction<string>> | any;
}
export interface ITask
  extends IHeaderTask,
    IBodyTask,
    IFooterTask {
  level?: `${Level}`;
}
export interface IStatusUpdate {
  id: string;
  status: `${Status}`;
}
