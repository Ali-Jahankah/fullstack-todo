import { tasks } from '../enums/tasks';

export interface ICounter {
  type: {
    task: tasks;
    color: string;
    count: number;
  };
}
