import {
  SHOW_PROFILE_IDENTVIDEO_UPLOADED_MODAL,
  HIDE_PROFILE_IDENTVIDEO_UPLOADED_MODAL
} from './profile-identvideo-uploaded.types';
import initialState from './profile-identvideo-uploaded.state';

const profileIdentvideoUploadedModalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SHOW_PROFILE_IDENTVIDEO_UPLOADED_MODAL:
      return {
        ...state,
        isVisible: true,
      };
      break;
    case HIDE_PROFILE_IDENTVIDEO_UPLOADED_MODAL:
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

export default profileIdentvideoUploadedModalReducer;
