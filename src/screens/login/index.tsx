import React, { useState } from 'react';
import { ImageBackground, Text, View, Dimensions, SafeAreaView } from 'react-native';
import styles from '../../styles/screens/login.style';
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
import LoginScreen from './Login';
import Colors from '../../styles/colors/colors';
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
      <View style={{ ...styles.container, height: screenHeight }}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ ...styles.header, height: 145, overflow: 'hidden' }}>
            <Text style={{ ...styles.f20, ...styles.white, ...styles.bold, textAlign: 'center' }}>
              {`${title}`}
            </Text>
            <View style={styles.line}></View>
            <Text style={{ ...styles.description, ...styles.white, textAlign: 'center' }}>
              {`${description}`}
            </Text>
          </View>
          <View style={{ height: 250 }}>{renderBody()}</View>
          <View style={{ ...styles.terms, height: screenHeight - 570 }}>
            <Text style={{ ...styles.white }}>
              {'With registration you accept the general '}
              <Text style={{ color: Colors.$primary }}>Terms</Text>
            </Text>
            <Text style={{ ...styles.white }}>
              {'and '}
              <Text style={{ color: Colors.$primary }}>Conditions</Text>
            </Text>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

export default Login;
