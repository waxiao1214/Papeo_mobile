import {
  SHOW_PROFILE_IDENTVIDEO_UPLOADED_MODAL,
  HIDE_PROFILE_IDENTVIDEO_UPLOADED_MODAL,
} from './profile-identvideo-uploaded.types';

export const showProfileIdentvideoUploaded = () => {
  return {
    type: SHOW_PROFILE_IDENTVIDEO_UPLOADED_MODAL,
  };
};

export const hideProfileIdentvideoUploaded = () => {
  return {
    type: HIDE_PROFILE_IDENTVIDEO_UPLOADED_MODAL,
  };
};
