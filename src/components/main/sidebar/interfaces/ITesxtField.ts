import React, { ChangeEvent } from 'react';

import { IDisabled } from './IDisabled';

type OnChange = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) => void;
export interface ITextField extends IDisabled {
  setTitle?: OnChange;
  setDesc?: OnChange;
  title?: string | null;
  desc?: string | null;
}
