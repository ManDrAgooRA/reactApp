import {
  fetchSinUpSuccess,
  fetchLoginSuccess,
  changeModalState,
} from '@/user/store/actions';
import { ISignUpUser, AppThunk } from '@/interfaces';
import { getRegistrationData, getLogin } from '@/user/businessLogic';

export const fetchSignUp = ({
  requestBody,
  handleNavigate,
}: ISignUpUser): AppThunk => {
  return async (dispatch) => {
    try {
      const data = await getRegistrationData({ requestBody });
      if (typeof data === 'string') {
        throw Error(data);
      }
      dispatch(fetchSinUpSuccess(data));
      if (Object.keys(data.user).length > 0) {
        handleNavigate('/');
      }
    } catch {
      dispatch(changeModalState(true));
    }
  };
};

export const fetchLogin = ({
  requestBody,
  handleNavigate,
}: ISignUpUser): AppThunk => {
  return async (dispatch) => {
    try {
      const data = await getLogin({ requestBody });
      if (typeof data === 'string') {
        throw new Error(data);
      }
      dispatch(fetchLoginSuccess(data));
      if (Object.keys(data.user).length > 0) {
        handleNavigate('/');
      }
    } catch {
      dispatch(changeModalState(true));
    }
  };
};
