import { IUniqueItem } from '@/interfaces';

export const getUniqueData = (
  uniqueData: string,
  goods: IUniqueItem[]
): string[] => {
  const uniqueArr: string[] = [];
  const uniqueValue = uniqueData;

  goods.forEach((item: any) => {
    uniqueArr.push(item[uniqueValue]);
  });

  return uniqueArr.filter((elem, i) => {
    return uniqueArr.indexOf(elem, i + 1) === -1;
  });
};
