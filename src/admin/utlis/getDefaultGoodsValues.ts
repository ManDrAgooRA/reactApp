import { IGoods } from '@/interfaces';

export const getDefaultValues = (
  currentForm: string,
  allGoods: IGoods[],
  productId: number
) => {
  const product = allGoods[productId || 0];
  switch (currentForm) {
    case 'edit': {
      return { ...product };
    }

    default:
      return {
        productImage: '',
        title: '',
        categories: '',
        price: '',
        raiting: '',
        countries: '',
        description: '',
        isSale: '',
      };
  }
};
