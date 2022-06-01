import { IGoods, IUser } from '.';

export interface IUserState {
  userId: string;
  userCart: IGoods[];
  favorites: number[];
  isLogin: boolean;
  userName: string;
  role: string;
}

export interface IGoodsState {
  allGoods: IGoods[];
  goods: IGoods[];
  selectedGoods: IGoods;
  sort: string;
  order: string;
  countries: string[];
  categories: string[];
  minPrice: number;
  maxPrice: number;
  currentMaxPrice: number;
  isLoadCurrentGoods: boolean;
  isLoadAllGoods: boolean;
  isLoadGoods: boolean;
}

export interface ICartState {
  cart: IGoods[];
}

export interface IErrorState {
  isOpenModal: boolean;
  message: string;
}

export interface IAdminState {
  allUsers: IUser[];
  roles: string[];
  adminModalState: boolean;
  isAdminLoading: boolean;
}
