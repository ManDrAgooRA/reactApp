import React, { FC } from 'react';
import { FormField, MaskedInput } from 'grommet';
import { Calendar } from 'grommet-icons';
import { getDateMask } from '@/user/pages/SignUp/masks';
import { IDateInput } from '@/interfaces';

export const DateInput: FC<IDateInput> = ({
  register,
  errorMessage,
  dateValue,
  setDateValue,
}) => {
  return (
    <FormField
      label="Date of birthday"
      name="dateOfBirthDay"
      error={errorMessage}
      {...register('dateOfBirthDay')}
    >
      <MaskedInput
        icon={<Calendar />}
        name="dateOfBirthDay"
        mask={getDateMask(dateValue)}
        value={dateValue}
        onChange={(event) => setDateValue(event.target.value)}
      />
    </FormField>
  );
};
