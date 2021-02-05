import {
  SHOW_PROFILE_EDIT_LOCATOIN_MODAL,
  HIDE_PROFILE_EDIT_LOCATOIN_MODAL,
} from './profile-edit-location.types';

export const showProfileEditLocation = () => {
  return {
    type: SHOW_PROFILE_EDIT_LOCATOIN_MODAL,
  };
};

export const hideProfileEditLocation = () => {
  return {
    type: HIDE_PROFILE_EDIT_LOCATOIN_MODAL,
  };
};
