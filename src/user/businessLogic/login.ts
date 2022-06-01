import { login } from '@/api';
import { IUserData, IUserResponse } from '@/interfaces';

export const getLogin = async ({
  requestBody,
}: IUserData): Promise<IUserResponse> => {
  try {
    const response = await login({ requestBody });
    const data = await response.json();
    localStorage.setItem('token', data.accessToken);
    return data;
  } catch (e: any) {
    throw new Error(e);
  }
};
