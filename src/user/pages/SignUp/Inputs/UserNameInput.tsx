import React, { FC } from 'react';
import { FormField, MaskedInput } from 'grommet';
import { User } from 'grommet-icons';
import { IInput } from '@/interfaces';

export const UserNameInput: FC<IInput> = ({ register, errorMessage }) => {
  return (
    <FormField
      label="User Name"
      name="userName"
      placeholder="user name"
      error={errorMessage}
      {...register('userName')}
    >
      <MaskedInput name="userName" placeholder="user name" icon={<User />} />
    </FormField>
  );
};
