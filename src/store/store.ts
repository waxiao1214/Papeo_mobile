import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import loginVerifyEmailModalReducer from './modals/login-verify-email/login-verify-email.reducer';

// imports for Reducers

const store = createStore(
  combineReducers({
    // modals
    loginVerifyEmailModal: loginVerifyEmailModalReducer, // open login verify email modal
  }),
);

export default store;
