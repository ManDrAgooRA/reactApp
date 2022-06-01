import { store } from '@/user/store';
import { messageActions } from '@/user/store/actions';

export class ErrorHandler extends Error {
  constructor(statusCode: string) {
    super(statusCode);
    if (statusCode === '400') {
      store.dispatch({
        type: messageActions.SET_MESSAGE,
        payload: 'Incorrect user`s data',
      });
    } else if (statusCode === '401') {
      store.dispatch({
        type: messageActions.SET_MESSAGE,
        payload: 'You are anauthorized please Unauthorize',
      });
    } else if (statusCode === '402') {
      store.dispatch({
        type: messageActions.SET_MESSAGE,
        payload: 'Payment Required',
      });
    } else if (statusCode === '403') {
      store.dispatch({
        type: messageActions.SET_MESSAGE,
        payload: 'You dont have permisson',
      });
    } else if (statusCode === '404') {
      store.dispatch({
        type: messageActions.SET_MESSAGE,
        payload: 'This data was not defined',
      });
    } else if (typeof statusCode === 'string') {
      store.dispatch({
        type: messageActions.SET_MESSAGE,
        payload: 'Server does not work please try later',
      });
    } else {
      store.dispatch({
        type: messageActions.SET_MESSAGE,
        payload: 'Ooops ... something went wrong please try later ',
      });
    }
  }
}
