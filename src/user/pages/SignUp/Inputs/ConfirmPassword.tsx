import React, { FC, useState } from 'react';
import { FormField, MaskedInput, Button } from 'grommet';
import { Hide, View } from 'grommet-icons';
import { IInput } from '@/interfaces';

export const ConfirmPassword: FC<IInput> = ({ register, errorMessage }) => {
  const [confirmReveal, setConfirmReveal] = useState(false);

  return (
    <FormField
      label="Confirm Password"
      name="confirmPass"
      error={errorMessage}
      {...register('confirmPass')}
    >
      <div className="passord-wrap">
        <MaskedInput
          name="confirmPass"
          plain
          placeholder="Confirm password"
          type={confirmReveal ? 'text' : 'password'}
        />
        <Button
          icon={confirmReveal ? <View size="medium" /> : <Hide size="medium" />}
          onClick={() => setConfirmReveal(!confirmReveal)}
        />
      </div>
    </FormField>
  );
};
