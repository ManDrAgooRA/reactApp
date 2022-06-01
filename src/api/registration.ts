import { IUserData } from '@/interfaces';
import { HTTPService } from '@/services/httpService';

export const registation = ({ requestBody }: IUserData): Promise<Response> => {
  return HTTPService.post('register', requestBody);
};
