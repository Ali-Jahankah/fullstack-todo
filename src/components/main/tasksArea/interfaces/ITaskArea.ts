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
export interface IFooterTask {
  progressHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  completeHandler: (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
  ) => void;
  status?: 'New' | 'Done' | 'In Progress';
}
export interface ITask
  extends IHeaderTask,
    IBodyTask,
    IFooterTask {
  id?: string;

  level?: 'Easy' | 'Challenging' | 'Difficult';
}
