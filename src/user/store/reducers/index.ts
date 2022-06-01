import { combineReducers } from 'redux';
import { goods } from './goods';
import { user } from './user';
import { message } from './message';
import { admin } from './admin';

export const rootReducer = combineReducers({
  goods,
  user,
  message,
  admin,
});

export type RootState = ReturnType<typeof rootReducer>;
