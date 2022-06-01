import { allUsersSuccess, changeModalState } from '@/user/store/actions';
import { getAllUser } from '@/admin/businessLogic/getAllUser';
import { AppThunk } from '@/interfaces';

export const allUsers = (): AppThunk => {
  return async (dispatch) => {
    try {
      const data = await getAllUser();
      dispatch(allUsersSuccess(data));
    } catch {
      dispatch(changeModalState(true));
    }
  };
};
