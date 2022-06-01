import React, { FC } from 'react';
import { Box, Layer } from 'grommet';
import { IPaymentModal } from '@/interfaces/IModal';
import { PaymentForm } from '@/user/components/PaymentForm/PaymentForm';

export const PaymentModal: FC<IPaymentModal> = ({
  paymentModal,
  handleClose,
}) => {
  return (
    <Box>
      {paymentModal && (
        <Layer onClickOutside={handleClose}>
          <PaymentForm />
        </Layer>
      )}
    </Box>
  );
};
