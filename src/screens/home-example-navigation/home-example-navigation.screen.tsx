import React, { FC } from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { showLoginVerifyEmail } from '../../store/modals/login-verify-email/login-verify-email.action';
import { useDispatch } from 'react-redux';

const HomeExampleNavigation: FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1 }}>
      <Button
        title="Terms And Conditions Screen"
        onPress={() => navigation.replace('TermsConditionsScreen')}
      />
      <Button title="Login Screen" onPress={() => navigation.replace('LoginScreen')} />
      <Button title="CreatePartyScreen" onPress={() => navigation.replace('CreatePartyScreen')} />
      <Button title="open verifyModal" onPress={() => dispatch(showLoginVerifyEmail())} />
    </View>
  );
};

export default HomeExampleNavigation;
