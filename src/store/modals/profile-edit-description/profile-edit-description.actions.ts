import {
  SHOW_PROFILE_EDIT_DESCRIPTION_MODAL,
  HIDE_PROFILE_EDIT_DESCRIPTION_MODAL,
} from './profile-edit-description.types';

export const showProfileEditDescription = () => {
  return {
    type: SHOW_PROFILE_EDIT_DESCRIPTION_MODAL,
  };
};

export const hideProfileEditDescription = () => {
  return {
    type: HIDE_PROFILE_EDIT_DESCRIPTION_MODAL,
  };
};
