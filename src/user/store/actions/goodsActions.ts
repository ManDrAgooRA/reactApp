import { IGoods } from '@/interfaces';

export const goodsActions = {
  FETCH_CURRENT_GOODS_SUCCESS: '[GOODS] fetch current goods success',
  FETCH_GOODS_SUCCESS: '[GOODS] fetch goods success',
  FETCH_ALL_GOODS_SUCCESS: '[GOODS] fetch all goods success',
  CLEAR_CURRENT_GOODS: '[GOODS] clear current goods',
  SET_SORT_STRING: '[GOODS] set sort string',
  SET_COUNTRIES: '[GOODS] set countries',
  SET_CATEGORIES: '[GOODS] set categories',
  SET_MIN_PRICE: '[GOODS] set min price',
  SET_CURRENT_MAX_PRICE: '[GOODS] set current max price',
  SET_MAX_PRICE: '[GOODS] set max price',
  EDIT_PRODUCT: '[GOODS] edit product',
  ADD_PRODUCT: '[GOODS] add product',
};

export const fetchCurrentGoodsSuccess = (currentGoods: IGoods) => ({
  type: goodsActions.FETCH_CURRENT_GOODS_SUCCESS,
  payload: currentGoods,
});

export const fetchGoodsSuccess = (goods: IGoods[]) => ({
  type: goodsActions.FETCH_GOODS_SUCCESS,
  payload: goods,
});

export const fetchAllGoodSuccess = (goods: IGoods[]) => ({
  type: goodsActions.FETCH_ALL_GOODS_SUCCESS,
  payload: goods,
});

export const clearCurrentGoods = () => ({
  type: goodsActions.CLEAR_CURRENT_GOODS,
});

export const setSortSting = (sortString: string) => ({
  type: goodsActions.SET_SORT_STRING,
  payload: sortString,
});

export const setCountries = (countries: string[]) => ({
  type: goodsActions.SET_COUNTRIES,
  payload: countries,
});

export const setCategories = (categories: string[]) => ({
  type: goodsActions.SET_CATEGORIES,
  payload: categories,
});

export const setMinPrice = (minPrice: number) => ({
  type: goodsActions.SET_MIN_PRICE,
  payload: minPrice,
});

export const setMaxPrice = (maxPrice: number) => ({
  type: goodsActions.SET_MAX_PRICE,
  payload: maxPrice,
});

export const setCurrentMaxPrice = (currentMaxPrice: number) => ({
  type: goodsActions.SET_CURRENT_MAX_PRICE,
  payload: currentMaxPrice,
});

export const editProduct = (newProduct: IGoods) => ({
  type: goodsActions.EDIT_PRODUCT,
  payload: newProduct,
});

export const addProduct = (newProduct: IGoods) => ({
  type: goodsActions.ADD_PRODUCT,
  payload: newProduct,
});
