import React, { FC } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar } from '@/sharedComponents/layout/AppBar/AppBar';
import { STRIPE_PUBCLICK_KEY } from '@/constants';
import { Footer } from '@/sharedComponents/layout/Footer/Footer';
import { ILayout } from '@/interfaces/ILayout';
import { Modal } from '@/sharedComponents/Modal/Modal';
import { changeModalState } from '@/user/store/actions';
import { messageSelector, modalStateSeletor } from '@/user/store/selectors';
import './layout.scss';

const stripePromise = loadStripe(STRIPE_PUBCLICK_KEY);

export const Layout: FC<ILayout> = ({ children }) => {
  const message = useSelector(messageSelector);
  const isOpenModal = useSelector(modalStateSeletor);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(changeModalState(false));
  };
  return (
    <>
      <AppBar />
      <div className="layout">
        <Modal
          isOpen={isOpenModal}
          message={message}
          handleClose={handleClose}
        />
        <Elements stripe={stripePromise}>{children}</Elements>
      </div>
      <Footer />
    </>
  );
};
