import { FieldError } from 'react-hook-form';
import { IGoods, IUser } from '@/interfaces';

export interface IErrorsAdminInputs {
  title?: FieldError;
  categories?: FieldError;
  countries?: FieldError;
  price?: FieldError;
  raiting?: FieldError;
}

export interface IErrorsUserInputs {
  userName?: FieldError;
  email?: FieldError;
  phone?: FieldError;
}

export type TGoodsUser = IGoods & IUser;
