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

const App: any = () => {
  /**
   * It would be better if we don't wrap the component with safeareaview because we use custom design. We need to calculate the margin/padding for safeareaview manually.
   */
  return (
    <Provider store={store}>
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
    </Provider>
  )
};

export default App;
