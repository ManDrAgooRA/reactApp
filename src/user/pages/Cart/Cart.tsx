import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PaymentModal } from '@/user/components/PaymentModal/PaymentModal';
import { CartItem } from '@/user/components/CartItem/CartItem';
import { userCartSelector, userIdSelector } from '@/user/store/selectors';
import { getTotalPrice } from '@/utils';
import { IGoods } from '@/interfaces';
import { changeUserCart } from '@/api/changeUserCart';
import { changeCountCart, removeFromCart } from '@/user/store/actions';
import './cart.scss';

export const Cart: FC = () => {
  const userCart = useSelector(userCartSelector);
  const dispatch = useDispatch();
  const userId = useSelector(userIdSelector);
  const [isPaymentModal, setIsOpenPaymentModal] = useState(false);

  const handleOpen = () => {
    setIsOpenPaymentModal(true);
  };

  const handleClose = () => {
    setIsOpenPaymentModal(false);
  };

  const changeCart = (id: number, count: number) => {
    const currentCart = userCart.map((item: { id: number }) =>
      item.id === id ? { ...item, count: +count } : item
    );

    dispatch(changeCountCart(currentCart));
    const newCartValue = {
      cart: currentCart,
    };

    changeUserCart({ id: userId, requestBody: newCartValue });
  };

  const handleDelete = (itemId: number) => {
    dispatch(removeFromCart(itemId));
    const currentCart = userCart.filter(
      (item: { id: number }) => item.id !== itemId
    );

    const newCartValue = {
      cart: currentCart,
    };

    changeUserCart({ id: userId, requestBody: newCartValue });
  };

  return (
    <div className="wrapper">
      <PaymentModal paymentModal={isPaymentModal} handleClose={handleClose} />
      {userCart.map((item: IGoods) => (
        <CartItem
          key={item.id}
          item={item}
          changeCart={changeCart}
          handleDelete={handleDelete}
        />
      ))}
      <div className="cart-total">
        <button
          type="button"
          className="btn btn-cart"
          disabled={userCart.length <= 0}
          onClick={handleOpen}
        >
          Buy
        </button>
        <span>Total: {getTotalPrice(userCart)}₴</span>
      </div>
    </div>
  );
};
