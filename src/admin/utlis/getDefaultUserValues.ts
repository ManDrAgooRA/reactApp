import { IUser } from '@/interfaces';

export const getDefaultUserValues = (
  currentForm: string,
  allUser: IUser[],
  userId: number
) => {
  const product = allUser[userId || 0];
  switch (currentForm) {
    case 'edit': {
      return { ...product };
    }

    default:
      return {
        userName: '',
        phone: '',
        email: '',
        dateOfBirthDay: '',
        password: '',
        confirmPass: '',
        role: '',
      };
  }
};
