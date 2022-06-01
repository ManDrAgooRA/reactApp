import React, { FC, useState } from 'react';
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from '@stripe/react-stripe-js';
import { useSelector, useDispatch } from 'react-redux';
import { userCartSelector } from '@/user/store/selectors';
import { getTotalPrice } from '@/utils';
import { setMessage, changeModalState } from '@/user/store/actions';
import './payment.scss';

export const PaymentForm: FC = () => {
  const dispatch = useDispatch();
  const cartGoods = useSelector(userCartSelector);
  const [isCardCompleted, setIsCardCompleted] = useState({
    cardNumber: false,
    cardExpiry: false,
    cardCvc: false,
  });

  const isDisabled = Object.values(isCardCompleted).every(
    (elem) => elem === true
  );

  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault();
    dispatch(setMessage('Payment was success'));
    dispatch(changeModalState(true));
  };

  const handleCardElementChange = async ({
    elementType,
    error,
    complete,
  }: {
    complete: boolean;
    elementType: string;
    error: { code: string; message: string; type: string } | undefined;
  }): Promise<void> => {
    if (error) {
      dispatch(setMessage(error.message));
    }

    if (elementType === 'cardNumber') {
      setIsCardCompleted({ ...isCardCompleted, cardNumber: complete });
    }

    if (elementType === 'cardCvc') {
      setIsCardCompleted({ ...isCardCompleted, cardCvc: complete });
    }

    if (elementType === 'cardExpiry') {
      setIsCardCompleted({ ...isCardCompleted, cardExpiry: complete });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <div className="card-wrapper">
        <div className="card">
          <span>Total: {getTotalPrice(cartGoods)}₴</span>
        </div>
        <div className="card card-number">
          <span>Card Number:</span>
          <CardNumberElement onChange={handleCardElementChange} />
        </div>
        <div className="card">
          <span>Expiry time:</span>
          <CardExpiryElement onChange={handleCardElementChange} />
        </div>
      </div>
      <div className="card">
        <span>CVC:</span>
        <CardCvcElement onChange={handleCardElementChange} />
      </div>
      <button type="submit" disabled={!isDisabled} className="btn-pay">
        Pay
      </button>
    </form>
  );
};
