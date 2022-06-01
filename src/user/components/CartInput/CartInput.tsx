import React, { FC } from 'react';
import { MaskedInput, Grommet } from 'grommet';
import { ICartInput } from '@/interfaces';
import { CART_MASK } from '@/constants';

export const CartInput: FC<ICartInput> = ({ value, onChange }) => {
  return (
    <Grommet>
      <MaskedInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
        mask={CART_MASK}
      />
    </Grommet>
  );
};
