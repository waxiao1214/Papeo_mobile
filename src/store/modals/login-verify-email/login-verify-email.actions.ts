import {
  SHOW_LOGIN_VERIFY_EMAIL_MODAL,
  HIDE_LOGIN_VERIFY_EMAIL_MODAL,
} from './login-verify-email.types';

export const showLoginVerifyEmail = () => {
  return {
    type: SHOW_LOGIN_VERIFY_EMAIL_MODAL,
  };
};

export const hideLoginVerifyEmail = () => {
  return {
    type: HIDE_LOGIN_VERIFY_EMAIL_MODAL,
  };
};
