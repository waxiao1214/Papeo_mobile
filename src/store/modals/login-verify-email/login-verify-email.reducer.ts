import {
  SHOW_LOGIN_VERIFY_EMAIL_MODAL,
  HIDE_LOGIN_VERIFY_EMAIL_MODAL,
} from './login-verify-email.types';
import initialState from './login-verify-email.state';

const loginVerifyEmailModalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SHOW_LOGIN_VERIFY_EMAIL_MODAL:
      return {
        ...state,
        isVisible: true,
      };
      break;
    case HIDE_LOGIN_VERIFY_EMAIL_MODAL:
      return {
        ...state,
        ...initialState,
      };
      break;
    default:
      return state;
      break;
  }
};

export default loginVerifyEmailModalReducer;
