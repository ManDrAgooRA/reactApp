import { IUserResponse, IGoods } from '@/interfaces';

export const userActions = {
  FETCH_SIGNUP_SUCCESS: '[AUTH] fetch signup success',
  FETCH_LOGIN_SUCCESS: '[AUTH] fetch loihn success',
  CHANGE_SIGNUP_STATUS: '[AUTH] change login status',
  ADD_GOODS_SUCCESS: '[AUTH] add goods success',
  REMOVE_FROM_CART: '[AUTH] remove from cart',
  CHANGE_COUNT_CART: '[AUTH] change count cart',
  CLEAR_CART: '[AUTH] clear cart',
  EDIT_FAVORITE_LIST: '[USER] edit favorite list',
};

export const changeSinUpStatus = (loginstatus: boolean) => ({
  type: userActions.CHANGE_SIGNUP_STATUS,
  payload: loginstatus,
});

export const fetchSinUpSuccess = (user: IUserResponse) => ({
  type: userActions.FETCH_SIGNUP_SUCCESS,
  payload: user,
});

export const fetchLoginSuccess = (user: IUserResponse) => ({
  type: userActions.FETCH_LOGIN_SUCCESS,
  payload: user,
});

export const addGoodsToCartSuccess = (currentGoods: IGoods) => ({
  type: userActions.ADD_GOODS_SUCCESS,
  payload: currentGoods,
});

export const removeFromCart = (id: number) => ({
  type: userActions.REMOVE_FROM_CART,
  payload: id,
});

export const changeCountCart = (cart: IGoods[]) => ({
  type: userActions.CHANGE_COUNT_CART,
  payload: {
    cart,
  },
});

export const clearCart = () => ({
  type: userActions.CLEAR_CART,
});

export const editFavoriteList = (id: number[]) => ({
  type: userActions.EDIT_FAVORITE_LIST,
  payload: id,
});
