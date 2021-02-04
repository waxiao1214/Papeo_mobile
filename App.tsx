import React from 'react';
import AppNavigation from './src/navigation/app-navigation';
import LoginVerifyEmailModal from './src/modals/login-verify-email/login-verify-email.modal';
import { Provider } from 'react-redux';
import store from './src/store/store';


const App: any = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
      <LoginVerifyEmailModal />
    </Provider>
  )
};

export default App;
