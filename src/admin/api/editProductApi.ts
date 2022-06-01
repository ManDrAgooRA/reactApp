import { HTTPService } from '@/services/httpService';
import { IEditRequest } from '@/admin/interfaces';

export const editProductApi = ({
  id,
  requestBody,
}: IEditRequest): Promise<Response> => {
  return HTTPService.patch(`goods/${id}`, requestBody);
};
