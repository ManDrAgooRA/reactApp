import { IAdminState } from '@/interfaces';
import { adminActions } from '@/user/store/actions';

const initialState: IAdminState = {
  allUsers: [],
  roles: ['admin', 'user', 'another'],
  adminModalState: false,
  isAdminLoading: true,
};

export function admin(state = initialState, action: any) {
  switch (action.type) {
    case adminActions.ALL_USERS_SUCCESS:
      return {
        ...state,
        allUsers: [...action.payload],
        isAdminLoading: false,
      };

    case adminActions.CHAGE_ADMIN_MODAL_STATE:
      return {
        ...state,
        adminModalState: action.payload,
      };

    case adminActions.ADD_NEW_ROLE:
      return {
        ...state,
        roles: [...state.roles, action.payload],
      };

    case adminActions.EDIT_USER:
      return {
        ...state,
        allUsers: state.allUsers.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    case adminActions.ADD_USER:
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload],
      };

    default:
      return state;
  }
}
