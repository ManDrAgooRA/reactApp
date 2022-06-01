import { IGetMinMaxReturnValue, IGoods } from '@/interfaces';

export const getMinMaxValue = (allGoods: IGoods[]): IGetMinMaxReturnValue => {
  const [itemWithValueMin] = allGoods.sort((a, b) => a.price - b.price);
  const [itemWithValueMax] = allGoods.sort((a, b) => b.price - a.price);

  if (allGoods.length) {
    return {
      minValue: itemWithValueMin.price,
      maxValue: itemWithValueMax.price,
    };
  }
  return {
    minValue: 0,
    maxValue: 0,
  };
};
