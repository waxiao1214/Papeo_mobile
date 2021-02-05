import {
  SHOW_PROFIL_EDIT_PHOTO_MODAL,
  HIDE_PROFIL_EDIT_PHOTO_MODAL
} from './profile-edit-photo.types';
import initialState from './profile-edit-photo.state';

const profileEditPhotoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SHOW_PROFIL_EDIT_PHOTO_MODAL:
      return {
        ...state,
        isVisible: true,
      };
      break;
    case HIDE_PROFIL_EDIT_PHOTO_MODAL:
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

export default profileEditPhotoReducer;
