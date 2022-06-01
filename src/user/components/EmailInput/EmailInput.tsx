import React, { FC } from 'react';
import { FormField, MaskedInput } from 'grommet';
import { MailOption } from 'grommet-icons';
import { EMAIL_MASK } from '@/constants';
import { IInput } from '@/interfaces';

export const EmailInput: FC<IInput> = ({ register, errorMessage }) => {
  return (
    <FormField
      label="Email"
      name="email"
      error={errorMessage}
      {...register('email')}
    >
      <MaskedInput icon={<MailOption />} name="email" mask={EMAIL_MASK} />
    </FormField>
  );
};
