import React, { useState } from 'react';
import { ImageBackground, Text, View, Dimensions, SafeAreaView } from 'react-native';
import s from './style';
import {
  LOGIN_TITLE,
  DESCRIPTION,
  LOGIN,
  CODE_EDIT,
  CODE_EDIT_TITLE,
  CODE_EDIT_DESCRIPTION,
  EDIT_NUMBER,
  EDIT_NUM_DESCRIPTION,
  EDIT_NUM_TITLE,
  ENTER_EMAIL,
  ENTER_EMAIL_TITLE,
  VERIFY_EMAIL_TITLE,
  VERIFY_EMAIL_DESCRIPTION,
  VERIFY_EMAIL,
} from '../../constant/login/data';
import PageInfo from './components/page-info/page-info';
import PageBottom from './components/page-bottom/page-bottom';
import LoginScreen from './Login';
import EnterCode from './EnterCode';
import EditNumber from './EditMobileNum';
import EnterEmail from './EnterEmail';
import VerifyEmail from './VerifyEmail';

const screenHeight = Math.round(Dimensions.get('window').height);

const BACK_IMAGE = require('../../assets/img/bg.png');

const Login = () => {
  const [title, setTitle] = useState(LOGIN_TITLE);
  const [description, setDescription] = useState(DESCRIPTION);
  const [status, setStatus] = useState(LOGIN);

  const onLogin = () => {
    setTitle(CODE_EDIT_TITLE);
    setDescription(CODE_EDIT_DESCRIPTION);
    setStatus(CODE_EDIT);
  };
  const onPhoneCodeSubmit = () => {};

  const renderBody = () => {
    switch (status) {
      case LOGIN:
        return <LoginScreen onLogin={onLogin} />;
      case CODE_EDIT:
        return (
          <EnterCode
            phoneNumber={'7127172637162'}
            onEditNumber={() => {
              setStatus(EDIT_NUMBER);
              setTitle(EDIT_NUM_TITLE);
              setDescription(EDIT_NUM_DESCRIPTION);
            }}
            onSubmit={() => onPhoneCodeSubmit()}
          />
        );
      case EDIT_NUMBER:
        return (
          <EditNumber
            onReturn={() => {
              onLogin();
            }}
          />
        );
      case ENTER_EMAIL:
        return <EnterEmail />;
      case VERIFY_EMAIL:
        return <VerifyEmail email="example@outlook.com" />;
    }
  };
  return (
    <ImageBackground source={BACK_IMAGE} style={{ flex: 1, height: screenHeight }}>
      <View style={[s.container, { height: screenHeight }]}>
        <SafeAreaView style={{ flex: 1 }}>
          <PageInfo title={title} description={description} />
          <View style={{ height: 250 }}>{renderBody()}</View>
          <PageBottom />
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

export default Login;
