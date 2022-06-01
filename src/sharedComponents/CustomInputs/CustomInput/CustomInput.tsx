import React, { FC } from 'react';
import { FormField, MaskedInput } from 'grommet';
import { ICustomInput } from '@/interfaces';

export const CustomInput: FC<ICustomInput> = ({
  label,
  name,
  placeholder,
  errorMessage,
  register,
  icon,
  mask,
}) => {
  return (
    <FormField label={label} error={errorMessage} {...register(`${name}`)}>
      <MaskedInput
        name={name}
        placeholder={placeholder}
        icon={icon}
        mask={mask}
      />
    </FormField>
  );
};
