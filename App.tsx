/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Login from './src/screens/login/index';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor='#00ff00' />
        <Login />
    </>
  );
};

export default App;
