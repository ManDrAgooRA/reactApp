import { TGoodsUser } from '@/admin/interfaces';

export const getMaxId = (array: TGoodsUser[]): number => {
  const [maxId] = array.sort((a: any, b: any) => b.id - a.id);

  return maxId.id || 1;
};
