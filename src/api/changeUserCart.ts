import { HTTPService } from '@/services/httpService';
import { ICartRequest } from '@/interfaces';

export const changeUserCart = ({
  id,
  requestBody,
}: ICartRequest): Promise<Response> => {
  return HTTPService.patch(`users/${id}`, requestBody);
};
