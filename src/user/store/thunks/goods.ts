import {
  fetchGoodsSuccess,
  fetchAllGoodSuccess,
  fetchCurrentGoodsSuccess,
  changeModalState,
} from '@/user/store/actions';
import { IFetchGoods, AppThunk } from '@/interfaces';
import { getGoods, getData, selectedGoods } from '@/user/businessLogic';

export const fetchGoods = ({
  limit,
  page,
  sort,
  order,
  countries,
  categories,
  minPrice,
  currentMaxPrice,
}: IFetchGoods): AppThunk => {
  return async (dispatch) => {
    try {
      const goods = await getGoods({
        limit,
        page,
        sort,
        order,
        countries,
        categories,
        minPrice,
        currentMaxPrice,
      });
      dispatch(fetchGoodsSuccess(goods));
    } catch {
      dispatch(changeModalState(true));
    }
  };
};

export const fetchAllGoods = (): AppThunk => {
  return async (dispatch) => {
    try {
      const allGoods = await getData();
      dispatch(fetchAllGoodSuccess(allGoods));
    } catch {
      dispatch(changeModalState(true));
    }
  };
};

export const fetchCurrentGoods = (id: string): AppThunk => {
  return async (dispatch) => {
    try {
      const currentGoods = await selectedGoods(id);
      dispatch(fetchCurrentGoodsSuccess(currentGoods));
    } catch {
      dispatch(changeModalState(true));
    }
  };
};
