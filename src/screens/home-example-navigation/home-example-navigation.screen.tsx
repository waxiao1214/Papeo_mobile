import React, { FC } from 'react';
import { View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { showLoginVerifyEmail } from '../../store/modals/login-verify-email/login-verify-email.actions';
import { showPartyJoinRequest } from '../../store/modals/party-join-request/party-join-request.actions';
import { showProfileEditBasicInfo } from '../../store/modals/profile-edit-basic-info/profile-edit-basic-info.actions';
import { showProfileEditDescription } from '../../store/modals/profile-edit-description/profile-edit-description.actions';
import { showProfileEditLocation } from '../../store/modals/profile-edit-location/profile-edit-location.actions';
import { showProfileEditPhoto } from '../../store/modals/profile-edit-photo/profile-edit-photo.actions';
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
      <Button title="Open Party JoinRequestModal" onPress={() => {dispatch(showPartyJoinRequest())}}/>
      <Button title="Open Profile EditBasicInfoModal" onPress={() => {dispatch(showProfileEditBasicInfo())}}/>
      <Button title="Open Profile EditDescriptionModal" onPress={() => {dispatch(showProfileEditDescription())}}/>
      <Button title="Open profile EditLocationModal" onPress={() => {dispatch(showProfileEditLocation())}}/>
      <Button title="Open profile EditPhotoModal" onPress={() => {dispatch(showProfileEditPhoto())}}/>
    </View>
  );
};

export default HomeExampleNavigation;
