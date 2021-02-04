import React from 'react';
import { View, SafeAreaView } from 'react-native';
import AppNavigation from './src/navigation/app-navigation';
import LoginVerifyEmailModal from './src/modals/login-verify-email/login-verify-email.modal';
import PartyJoinRequested from './src/modals/party-join-requested/party-join-requested.modal';
import ProfileEditLocation from './src/modals/profile-edit-location/profile-edit-location.modal';
import ProfileEditBasicInfoModal from './src/modals/profile-edit-basic-info/profile-edit-basic-info.modal';
import ProfileVerifyPhotoModal from './src/modals/profile-verify-photo/profile-verify-photo.modal';
import ProfileRemoveIdentvideoModal from './src/modals/profile-remove-identvideo/profile-remove-identvideo.modal';
import ProfileEditPhotoModal from './src/modals/profile-edit-photo/profile-edit-photo.modal';
import { Provider } from 'react-redux';
import store from './src/store/store'

const App: any = () => {
  return (
    <Provider store={store}>
    <SafeAreaView style={{  width: '100%', height: '100%', }}>
      <AppNavigation />
        {/* <LoginVerifyEmailModal /> */}
        {/* <PartyJoinRequested /> */}
        {/* <ProfileEditLocation /> */}
        {/* <ProfileEditBasicInfoModal /> */}
        {/* <ProfileVerifyPhotoModal /> */}
        {/* <ProfileRemoveIdentvideoModal /> */}
        <ProfileEditPhotoModal />
    </SafeAreaView>
    </Provider>
  )
};

export default App;
