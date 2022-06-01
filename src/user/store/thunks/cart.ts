import { changeModalState, addGoodsToCartSuccess } from '@/user/store/actions';
import { changeUserCart } from '@/api/changeUserCart';
import { IAddToCart, AppThunk } from '@/interfaces';

export const addToCart = ({ id, item, cart }: IAddToCart): AppThunk => {
  const newCartValue = {
    cart: [...cart, item],
  };
  return async (dispatch) => {
    try {
      dispatch(addGoodsToCartSuccess(item));
      changeUserCart({ id, requestBody: newCartValue });
    } catch {
      dispatch(changeModalState(true));
    }
  };
};
