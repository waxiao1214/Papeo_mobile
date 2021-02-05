import {
  SHOW_PROFILE_VERIFY_PHOTO_MODAL,
  HIDE_PROFILE_VERIFY_PHOTO_MODAL
} from './profile-verify-photo.types';
import initialState from './profile-verify-photo.state';

const profileVerifyPhotoModalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SHOW_PROFILE_VERIFY_PHOTO_MODAL:
      return {
        ...state,
        isVisible: true,
      };
      break;
    case HIDE_PROFILE_VERIFY_PHOTO_MODAL:
      return {
        ...state,
        ...initialState,
      };
      break;
    default:
      return state;
      break;
  }
};

export default profileVerifyPhotoModalReducer;
