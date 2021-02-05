import {
  SHOW_PROFILE_REMOVE_IDENTVIDEO_MODAL,
  HIDE_PROFILE_REMOVE_IDENTVIDEO_MODAL,
} from './profile-remove-identvideo.types';

export const showProfileRemoveIdentvideo = () => {
  return {
    type: SHOW_PROFILE_REMOVE_IDENTVIDEO_MODAL,
  };
};

export const hideProfileRemoveIdentvideo = () => {
  return {
    type: HIDE_PROFILE_REMOVE_IDENTVIDEO_MODAL,
  };
};
