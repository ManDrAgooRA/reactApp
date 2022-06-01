import { IGoods } from '@/interfaces';

export const getTotalPrice = (obj: IGoods[]): number => {
  const totalPrice = Object.values(obj).reduce((num, item) => {
    if (item.count) {
      num += item.price * item.count;
    }
    return num;
  }, 0);

  return totalPrice;
};
