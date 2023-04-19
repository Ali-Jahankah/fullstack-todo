/* eslint-disable @typescript-eslint/no-empty-function */
import React, {
  createContext,
  FC,
  PropsWithChildren,
  ReactElement,
  useState,
} from 'react';

export const UpdateStatusContext = createContext({
  updated: false,
  toggle: () => {},
});

export const UpdateStateProvider: FC<PropsWithChildren> = ({
  children,
}): ReactElement => {
  const [updated, setUpdated] = useState(false);

  const toggleHandler = () => {
    updated ? setUpdated(false) : setUpdated(true);
  };
  return (
    <UpdateStatusContext.Provider
      value={{ updated: updated, toggle: toggleHandler }}
    >
      {children}
    </UpdateStatusContext.Provider>
  );
};
