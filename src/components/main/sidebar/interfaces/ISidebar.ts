import { Dispatch, SetStateAction } from 'react';

export interface ISidebar {
  showBar: boolean;
  setShowBar: Dispatch<SetStateAction<boolean>>;
}
