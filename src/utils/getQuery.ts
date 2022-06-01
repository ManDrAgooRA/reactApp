import { IFetchGoods } from '@/interfaces';

export const getQuery = (obj: IFetchGoods): string => {
  let queryString = '';
  Object.keys(obj).reduce((str, key) => {
    if (key === 'countries' || key === 'categories') {
      queryString += `&${key}_like=${obj[key].join('')}`;
    } else if (key === 'minPrice') {
      queryString += `&price_gte=${obj[key]}`;
    } else if (key === 'currentMaxPrice') {
      queryString += `&price_lte=${obj[key]}`;
    } else {
      queryString += `&_${key}=${obj[key]}`;
    }

    return queryString;
  }, '');

  return queryString;
};
