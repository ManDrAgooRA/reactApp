import { getRegistrationData } from '@/user/businessLogic';
import { AppThunk, IUser } from '@/interfaces';
import { changeModalState, setMessage, addUser } from '@/user/store/actions';

export const addNewUser = ({
  requestBody,
}: {
  requestBody: IUser;
}): AppThunk => {
  return async (dispatch) => {
    try {
      const data = await getRegistrationData({ requestBody });
      if (typeof data === 'string') {
        throw Error(data);
      }
      dispatch(setMessage('User was added'));
      dispatch(addUser(requestBody));
      dispatch(changeModalState(true));
    } catch {
      dispatch(changeModalState(true));
    }
  };
};
