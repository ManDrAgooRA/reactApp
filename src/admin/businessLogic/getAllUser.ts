import { getUsers } from '@/admin/api/getUsers';

export const getAllUser = async () => {
  try {
    const response = await getUsers();
    const data = await response.json();

    return data;
  } catch (e: any) {
    throw new Error(e);
  }
};
