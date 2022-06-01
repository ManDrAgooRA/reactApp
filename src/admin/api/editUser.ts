import { HTTPService } from '@/services/httpService';
import { IEditUserRequest, IEditFavoriteList } from '@/admin/interfaces';

export const editUserApi = ({
  id,
  requestBody,
}: IEditUserRequest): Promise<Response> => {
  return HTTPService.patch(`users/${id}`, requestBody);
};

export const editFavoriteListApi = ({
  id,
  requestBody,
}: IEditFavoriteList): Promise<Response> => {
  return HTTPService.patch(`users/${id}`, requestBody);
};
