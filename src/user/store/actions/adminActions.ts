import { IUser } from '@/interfaces';

export const adminActions = {
  ALL_USERS_SUCCESS: '[ADMIN] all users success',
  CHAGE_ADMIN_MODAL_STATE: '[ADMIN] change admin modal state',
  ADD_NEW_ROLE: '[ADMIN] add new role',
  ADD_USER: '[ADMIN] add user',
  EDIT_USER: '[ADMIN] edit user',
};

export const allUsersSuccess = (users: IUser) => ({
  type: adminActions.ALL_USERS_SUCCESS,
  payload: users,
});

export const changeAdminModalState = (isOpen: boolean) => ({
  type: adminActions.CHAGE_ADMIN_MODAL_STATE,
  payload: isOpen,
});

export const addNewRole = (role: string) => ({
  type: adminActions.ADD_NEW_ROLE,
  payload: role,
});

export const addUser = (user: IUser) => ({
  type: adminActions.ADD_USER,
  payload: user,
});

export const editUser = (user: IUser) => ({
  type: adminActions.EDIT_USER,
  payload: user,
});
