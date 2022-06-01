import { IGoods } from '.';

export interface IUser {
  id: number;
  userName: string;
  phone: string;
  dateOfBirthDay: string;
  email: string;
  password: string;
  confirmPass: string;
  role: string;
  cart: IGoods[];
}

export interface IUserData {
  requestBody: IUser;
}

export interface ISignUpUser {
  requestBody: IUser;
  handleNavigate(params: string): void;
}

export interface IUserResponse {
  accessToken: string;
  user: IUser;
}
