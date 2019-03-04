import { LoginAction } from '../actions/Login';
import { INPROGRESS_LOGIN, SUCCESS_LOGIN, FAILURE_LOGIN } from '../constants/index';
import { IUserState } from 'src/types/IUserState';

export const initialState: IUserState = {
  authenticated: false
}

// todo test
export default (state: IUserState = initialState, action: LoginAction): IUserState => {
  switch (action.type) {
    case INPROGRESS_LOGIN:
      return {
        ...state,
        authenticated: state.authenticated,
        token: state.token
      };
    case SUCCESS_LOGIN:
      return {
        ...state,
        authenticated: state.authenticated,
        token: state.token
      };
    case FAILURE_LOGIN:
      return {
        ...state,
        authenticated: state.authenticated,
        token: state.token
      };
    default:
      return state;
  }
  return state;
};
