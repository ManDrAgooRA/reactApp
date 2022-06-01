import React, { FC, useState } from 'react';
import { FormField, MaskedInput, Button } from 'grommet';
import { Hide, View } from 'grommet-icons';
import { IInput } from '@/interfaces';

export const PasswordInput: FC<IInput> = ({ register, errorMessage }) => {
  const [passValue, setPassValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  return (
    <FormField
      label="Password"
      name="name"
      error={errorMessage}
      {...register('password')}
    >
      <div className="passord-wrap">
        <MaskedInput
          name="password"
          plain
          type={isOpen ? 'text' : 'password'}
          value={passValue}
          placeholder="Password"
          onChange={(event) => setPassValue(event.target.value)}
        />
        <Button
          icon={isOpen ? <View size="medium" /> : <Hide size="medium" />}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </FormField>
  );
};
