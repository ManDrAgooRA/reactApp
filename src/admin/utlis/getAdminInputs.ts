import { IErrorsAdminInputs } from '@/admin/interfaces';
import {
  priceMask,
  raitingMask,
} from '@/admin/components/AdminGoodsForm/masks';

export const getAdminInputs = (errors: IErrorsAdminInputs) => {
  return [
    {
      name: 'title',
      label: 'Title',
      errorMessage: errors.title?.message || '',
    },
    {
      name: 'categories',
      label: 'Category',
      errorMessage: errors.categories?.message || '',
    },
    {
      name: 'countries',
      label: 'Country',
      errorMessage: errors.countries?.message || '',
    },
    {
      name: 'price',
      label: 'Price',
      mask: priceMask,
      errorMessage: errors.price?.message || '',
    },
    {
      name: 'raiting',
      label: 'Raiting',
      mask: raitingMask,
      errorMessage: errors.raiting?.message || '',
    },
  ];
};
