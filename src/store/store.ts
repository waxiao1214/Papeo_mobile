import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import loginVerifyEmailModalReducer from './modals/login-verify-email/login-verify-email.reducer';
import partyJoinRequestModalReducer from './modals/party-join-request/party-join-request.reducer';
import profileEditBasicInfoModalReducer from './modals/profile-edit-basic-info/profile-edit-basic-info.reducer';
import profileEditDescriptionModalReducer from './modals/profile-edit-description/profile-edit-description.reducer';
import profileEditLocationModalReducer from './modals/profile-edit-location/profile-edit-location.reducer';
import profileEditPhotoModalReducer from './modals/profile-edit-photo/profile-edit-photo.reducer';
import profileIdentvideoUploadedModalReducer from './modals/profile-identvideo-uploaded/profile-identvideo-uploaded.reducer';
import profileRemoveIdentvideoModalReducer from './modals/profile-remove-identvideo/profile-remove-identvideo.reducer';

import createPartyFormReducer from './party/create-party-form/create-party-form.reducer';

// imports for Reducers

const store = createStore(
  combineReducers({
    // modals
    loginVerifyEmailModal: loginVerifyEmailModalReducer, // open login verify email modal
    partyJoinRequestModal: partyJoinRequestModalReducer, // open party join request modal
    profileEditBasicInfoModal: profileEditBasicInfoModalReducer, // open profile edit basic info modal
    profileEditDescriptionModal: profileEditDescriptionModalReducer,
    profileEditLocationModal: profileEditLocationModalReducer,
    profileEditPhotoModal: profileEditPhotoModalReducer,
    profileIdentvideoUploadedModal: profileIdentvideoUploadedModalReducer,
    profileRemoveIdentvideoModal: profileRemoveIdentvideoModalReducer,
    // party
    createPartyForm: createPartyFormReducer,
  }),
);

export default store;
