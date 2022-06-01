import { messageActions } from '@/user/store/actions';
import { IErrorState } from '@/interfaces';

const initialState: IErrorState = {
  isOpenModal: false,
  message: '',
};

export function message(state = initialState, action: any) {
  switch (action.type) {
    case messageActions.SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };

    case messageActions.CHANGE_MODAL_STATE:
      return {
        ...state,
        isOpenModal: action.payload,
      };
    default:
      return state;
  }
}
