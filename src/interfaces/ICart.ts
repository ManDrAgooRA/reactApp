import { IGoods } from '.';

export interface ICartRequest {
  id: number;
  requestBody: { cart: IGoods[] };
}

export interface IAddToCart {
  id: number;
  item: IGoods;
  cart: IGoods[];
}

export interface IProductCartItem {
  item: IGoods;
  changeCart(id: number, count: number): void;
  handleDelete(id: number): void;
}
