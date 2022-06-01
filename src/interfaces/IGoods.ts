export interface IGoods {
  title: string;
  price: number;
  categories: string;
  count?: number;
  countries: string;
  description: string;
  isFavorite: boolean;
  id?: number;
  favorites?: number[];
  productImage: string;
  isSale: boolean;
  raiting: number;
}
