import { getAllData } from '@/api';
import { IGoods } from '@/interfaces';

export const getData = async (): Promise<IGoods[]> => {
  try {
    const response = await getAllData();
    const data = await response.json();

    return data;
  } catch (e: any) {
    throw new Error(e);
  }
};
