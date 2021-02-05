import {
  SHOW_PROFILE_VERIFY_PHOTO_MODAL,
  HIDE_PROFILE_VERIFY_PHOTO_MODAL,
} from './profile-verify-photo.types';

export const showProfileVerifyPhoto = () => {
  return {
    type: SHOW_PROFILE_VERIFY_PHOTO_MODAL,
  };
};

export const hideProfileVerifyPhoto = () => {
  return {
    type: HIDE_PROFILE_VERIFY_PHOTO_MODAL,
  };
};
