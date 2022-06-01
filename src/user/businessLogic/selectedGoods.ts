import { getCurrentGoods } from '@/api';
import { IGoods } from '@/interfaces';

export const selectedGoods = async (id: string): Promise<IGoods> => {
  try {
    const response = await getCurrentGoods(id);
    const data = await response.json();

    return data;
  } catch (e: any) {
    throw new Error(e);
  }
};
