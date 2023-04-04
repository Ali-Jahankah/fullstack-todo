import { Stack } from '@mui/material';
import React, { ReactElement, FC } from 'react';
import DescriptionInput from './DescriptionInput';
import TitleInput from './TitleInput';

const TextFields: FC = (): ReactElement => {
  return (
    <>
      <TitleInput></TitleInput>
      <DescriptionInput></DescriptionInput>
    </>
  );
};

export default TextFields;
