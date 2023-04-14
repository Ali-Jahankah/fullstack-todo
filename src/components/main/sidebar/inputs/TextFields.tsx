import React, { ReactElement, FC } from 'react';
import DescriptionInput from './DescriptionInput';
import TitleInput from './TitleInput';
import { ITextField } from '../interfaces/ITesxtField';

const TextFields: FC<ITextField> = ({
  title,
  desc,
  setDesc,
  setTitle,
}): ReactElement => {
  return (
    <>
      <TitleInput
        title={title}
        setTitle={setTitle}
      ></TitleInput>
      <DescriptionInput
        desc={desc}
        setDesc={setDesc}
      ></DescriptionInput>
    </>
  );
};

export default TextFields;
