import { Stack } from '@mui/material';
import React, { ReactElement, FC } from 'react';
import DescriptionInput from './DescriptionInput';
import TitleInput from './TitleInput';

const TextFields: FC = (): ReactElement => {
  return (
    <Stack spacing={2}>
      <TitleInput></TitleInput>
      <DescriptionInput></DescriptionInput>
    </Stack>
  );
};

export default TextFields;
