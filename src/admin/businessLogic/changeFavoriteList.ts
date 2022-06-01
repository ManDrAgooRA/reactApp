import { editFavoriteListApi } from '@/admin/api';
import { IEditFavoriteList } from '@/admin/interfaces';

export const changeFavoriteList = async ({
  id,
  requestBody,
}: IEditFavoriteList) => {
  try {
    const response = await editFavoriteListApi({ id, requestBody });
    const data = await response.json();

    return data;
  } catch (e: any) {
    throw new Error(e);
  }
};
