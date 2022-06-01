import { HTTPService } from '@/services/httpService';
import { IFetchGoods } from '@/interfaces';
import { getQuery } from '@/utils';

export const getAllGoods = ({
  limit,
  page,
  sort,
  order,
  countries,
  categories,
  minPrice,
  currentMaxPrice,
}: IFetchGoods): Promise<Response> => {
  return HTTPService.get(
    `goods?${getQuery({
      limit,
      page,
      sort,
      order,
      countries,
      categories,
      minPrice,
      currentMaxPrice,
    })}`
  );
};

export const getAllData = (): Promise<Response> => {
  return HTTPService.get('goods');
};

export const getCurrentGoods = (id: string): Promise<Response> => {
  return HTTPService.get(`goods/${id}`);
};
