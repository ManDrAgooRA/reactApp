import React, { FC } from 'react';
import { Phone } from 'grommet-icons';
import { FormField, MaskedInput } from 'grommet';
import { PHONE_MASK } from '@/user/pages/SignUp/masks';
import { IInput } from '@/interfaces';

export const PhoneInput: FC<IInput> = ({ register, errorMessage }) => {
  return (
    <FormField
      label="Phone"
      name="phone"
      error={errorMessage}
      {...register('phone')}
    >
      <MaskedInput name="phone" icon={<Phone />} mask={PHONE_MASK} />
    </FormField>
  );
};
