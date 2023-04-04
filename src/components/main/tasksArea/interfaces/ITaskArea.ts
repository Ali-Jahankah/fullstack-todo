import { tasks } from '../enums/tasks';

export interface ICounter {
  type: {
    task: tasks;
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
