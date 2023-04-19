import { Status } from './../components/main/sidebar/interfaces/ISelect';
import {
  IResponse,
  IData,
} from './../components/main/sidebar/interfaces/IResponse';
export const taskCounter = (
  tasks: IData,
  status: `${Status}`,
) => {
  if (Array.isArray(tasks) && tasks.length === 0) {
    return 0;
  }
  const totalTask = tasks.data.filter(
    (item) => item.status === status,
  );
  return totalTask.length;
};
