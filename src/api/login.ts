import { IUserData } from '@/interfaces';
import { HTTPService } from '@/services/httpService';

export const login = ({ requestBody }: IUserData): Promise<Response> => {
  return HTTPService.post('login', requestBody);
};
