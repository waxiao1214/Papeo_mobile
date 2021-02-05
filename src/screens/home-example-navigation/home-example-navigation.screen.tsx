import React, { FC } from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { showLoginVerifyEmail } from '../../store/modals/login-verify-email/login-verify-email.actions';
import { useDispatch } from 'react-redux';
import { Colors } from '../../styles';

const HomeExampleNavigation: FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.$partyBackground }}>
      <Button
      color={'white'}
        title="Terms And Conditions Screen"
        onPress={() => navigation.replace('TermsConditionsScreen')}
      />
      <Button color={'white'} title="Login Screen" onPress={() => navigation.replace('LoginScreen')} />
      <Button color={'white'} title="CreatePartyScreen" onPress={() => navigation.replace('CreatePartyScreen')} />
      <Button color={'white'} title="open verifyModal" onPress={() => dispatch(showLoginVerifyEmail())} />
    </View>
  );
};

export default HomeExampleNavigation;
