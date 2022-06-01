import { registation } from '@/api';
import { IUserData, IUserResponse } from '@/interfaces';

export const getRegistrationData = async ({
  requestBody,
}: IUserData): Promise<IUserResponse> => {
  try {
    const response = await registation({ requestBody });
    const data = await response.json();
    localStorage.setItem('token', data.accessToken);

    return data;
  } catch (e: any) {
    throw new Error(e);
  }
};
