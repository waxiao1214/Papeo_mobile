import React, { FC } from 'react';
import { View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { showLoginVerifyEmail } from '../../store/modals/login-verify-email/login-verify-email.actions';
import { showPartyJoinRequest } from '../../store/modals/party-join-request/party-join-request.actions';
import { showProfileEditBasicInfo } from '../../store/modals/profile-edit-basic-info/profile-edit-basic-info.actions';
import { showProfileEditDescription } from '../../store/modals/profile-edit-description/profile-edit-description.actions';
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
      <Button title="Open PartyJoinRequestModal" onPress={() => {dispatch(showPartyJoinRequest())}}/>
      <Button title="Open ProfileEditBasicInfoModal" onPress={() => {dispatch(showProfileEditBasicInfo())}}/>
      <Button title="Open ProfileEditDescriptionModal" onPress={() => {dispatch(showProfileEditDescription())}}/>
    </View>
  );
};

export default HomeExampleNavigation;
