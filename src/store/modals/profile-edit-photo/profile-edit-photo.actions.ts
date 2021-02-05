import {
  SHOW_PROFIL_EDIT_PHOTO_MODAL,
  HIDE_PROFIL_EDIT_PHOTO_MODAL,
} from './profile-edit-photo.types';

export const showProfileEditPhoto = () => {
  return {
    type: SHOW_PROFIL_EDIT_PHOTO_MODAL,
  };
};

export const hideProfileEditPhoto = () => {
  return {
    type: HIDE_PROFIL_EDIT_PHOTO_MODAL,
  };
};
