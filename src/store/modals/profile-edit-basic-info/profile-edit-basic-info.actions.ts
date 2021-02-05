import {
  SHOW_PROFILE_EDIT_BASIC_INFO_MODAL,
  HIDE_PROFILE_EDIT_BASIC_INFO_MODAL,
} from './profile-edit-basic-info.types';

export const showProfileEditBasicInfo = () => {
  return {
    type: SHOW_PROFILE_EDIT_BASIC_INFO_MODAL,
  };
};

export const hideProfileEditBasicInfo = () => {
  return {
    type: HIDE_PROFILE_EDIT_BASIC_INFO_MODAL,
  };
};
