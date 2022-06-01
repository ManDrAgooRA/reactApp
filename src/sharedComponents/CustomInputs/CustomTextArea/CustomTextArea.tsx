import React, { FC } from 'react';
import { FormField, TextArea } from 'grommet';
import { ICustomInput } from '@/interfaces';

export const CustomTextArea: FC<ICustomInput> = ({
  label,
  name,
  placeholder,
  errorMessage,
  register,
}) => {
  return (
    <FormField label={label} error={errorMessage} {...register(`${name}`)}>
      <TextArea name={name} placeholder={placeholder} />
    </FormField>
  );
};
