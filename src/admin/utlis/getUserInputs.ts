import { IErrorsUserInputs } from '@/admin/interfaces';
import { PHONE_MASK } from '@/user/pages/SignUp/masks';

export const getUserInputs = (errors: IErrorsUserInputs) => {
  return [
    {
      name: 'userName',
      label: 'User Name',
      errorMessage: errors.userName?.message,
    },
    {
      name: 'email',
      label: 'Email',
      errorMessage: errors.email?.message,
    },
    {
      name: 'phone',
      label: 'Phone',
      mask: PHONE_MASK,
      errorMessage: errors.phone?.message,
    },
  ];
};
