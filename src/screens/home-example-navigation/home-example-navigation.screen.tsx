import React, { FC } from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { showLoginVerifyEmail } from '../../store/modals/login-verify-email/login-verify-email.actions';
import { showPartyJoinRequest } from '../../store/modals/party-join-request/party-join-request.actions';
import { showProfileEditBasicInfo } from '../../store/modals/profile-edit-basic-info/profile-edit-basic-info.actions';
import { showProfileEditDescription } from '../../store/modals/profile-edit-description/profile-edit-description.actions';
import { showProfileEditLocation } from '../../store/modals/profile-edit-location/profile-edit-location.actions';
import { showProfileEditPhoto } from '../../store/modals/profile-edit-photo/profile-edit-photo.actions';
import { showProfileIdentvideoUploaded } from '../../store/modals/profile-identvideo-uploaded/profile-identvideo-uploaded.actions';
import { showProfileRemoveIdentvideo } from '../../store/modals/profile-remove-identvideo/profile-remove-identvideo.actions';
import { showProfileVerifyPhoto } from '../../store/modals/profile-verify-photo/profile-verify-photo.actions';

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
        onPress={() => navigation.navigate('TermsConditionsScreen')}
      />
      <Button color={'white'} title="Login Screen" onPress={() => navigation.navigate('LoginScreen')} />
      <Button color={'white'} title="CreatePartyScreen" onPress={() => navigation.navigate('CreatePartyScreen')} />
      <Button color={'white'} title="open verifyModal" onPress={() => dispatch(showLoginVerifyEmail())} />
      <Button color={'white'} title="Open Party JoinRequestModal" onPress={() => {dispatch(showPartyJoinRequest())}}/>
      <Button color={'white'} title="Open Profile EditBasicInfoModal" onPress={() => {dispatch(showProfileEditBasicInfo())}}/>
      <Button color={'white'} title="Open Profile EditDescriptionModal" onPress={() => {dispatch(showProfileEditDescription())}}/>
      <Button color={'white'} title="Open profile EditLocationModal" onPress={() => {dispatch(showProfileEditLocation())}}/>
      <Button color={'white'} title="Open profile EditPhotoModal" onPress={() => {dispatch(showProfileEditPhoto())}}/>
      <Button color={'white'} title="Open profile IdentVideo Uploaded Modal" onPress={() => {dispatch(showProfileIdentvideoUploaded())}}/>
      <Button color={'white'} title="Open profile Remove IdentVideo Modal" onPress={() => {dispatch(showProfileRemoveIdentvideo())}}/>
      <Button title="Open profile Verify Photo Modal" onPress={() => {dispatch(showProfileVerifyPhoto())}}/>
    </View>
  );
};

export default HomeExampleNavigation;
