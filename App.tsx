import React from 'react';
import AppNavigation from './src/navigation/app-navigation';
import LoginVerifyEmailModal from './src/modals/login-verify-email/login-verify-email.modal';
import PartyJoinRequested from './src/modals/party-join-requested/party-join-requested.modal';
import ProfileEditLocation from './src/modals/profile-edit-location/profile-edit-location.modal';
import ProfileEditBasicInfoModal from './src/modals/profile-edit-basic-info/profile-edit-basic-info.modal';
import ProfileVerifyPhotoModal from './src/modals/profile-verify-photo/profile-verify-photo.modal';
import ProfileRemoveIdentvideoModal from './src/modals/profile-remove-identvideo/profile-remove-identvideo.modal';
import ProfileEditPhotoModal from './src/modals/profile-edit-photo/profile-edit-photo.modal';
import ProfileEditDescriptionModal from './src/modals/profile-edit-description/profile-edit-description.modal';
import ProfileIdentvideoUploadedModal from './src/modals/profile-identvideo-uploaded/profile-identvideo-uploaded.modal';
import { Provider } from 'react-redux';
import store from './src/store/store';
import { SafeAreaView } from 'react-native';

const App: any = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <AppNavigation />
        <LoginVerifyEmailModal />
        <PartyJoinRequested />
        <ProfileEditLocation />
        <ProfileEditBasicInfoModal />
        <ProfileVerifyPhotoModal />
        <ProfileRemoveIdentvideoModal />
        <ProfileEditPhotoModal />
        <ProfileEditDescriptionModal />
        <ProfileIdentvideoUploadedModal />
      </SafeAreaView>
    </Provider>
  )
};

export default App;
