import { HTTPService } from '@/services/httpService';

export const getUsers = (): Promise<Response> => {
  return HTTPService.get('users');
};
