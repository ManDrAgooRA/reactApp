import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash } from 'grommet-icons';
import { LINKS } from '@/constants';
import { IProductCartItem } from '@/interfaces';
import { CartInput } from '@/user/components/CartInput/CartInput';
import './cartItem.scss';

export const CartItem: FC<IProductCartItem> = ({
  item,
  changeCart,
  handleDelete,
}) => {
  const [count, setCount] = useState(item.count);

  const incrementCount = () => {
    setCount(count + 1);
    changeCart(item.id || 0, count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
    changeCart(item.id || 0, count - 1);
  };

  const handlerDelete = () => {
    handleDelete(item.id || 0);
  };

  const onChangeHandler = (value: string) => {
    setCount(+value <= 0 ? 1 : +value);
    changeCart(item.id || 0, +value <= 0 ? 1 : +value);
  };

  return (
    <div className="cart-item">
      <div className="cart-description">
        <div className="cart-img">
          <img src={item.productImage} alt="#" />
        </div>
        <div className="cart-content">
          <p>id: {item.id}</p>
          <p>
            title:
            <Link to={`${LINKS.goods}/${item.id}`}>{item.title}</Link>
          </p>
          <p>price: {item.price}/1</p>
          <p>
            total price: {item.price * count}/{count}
          </p>
          <button
            type="button"
            onClick={handlerDelete}
            className="btn btn-cart_trash"
          >
            <Trash />
          </button>
        </div>
      </div>

      <div className="cart-counter">
        <button
          type="button"
          onClick={decrementCount}
          disabled={count <= 1}
          className="btn btn-cart_counter"
        >
          -
        </button>
        <CartInput value={count} onChange={onChangeHandler} />
        <button
          type="button"
          onClick={incrementCount}
          className="btn btn-cart_counter"
        >
          +
        </button>
      </div>
    </div>
  );
};
