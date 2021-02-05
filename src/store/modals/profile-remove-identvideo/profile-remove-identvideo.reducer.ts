import {
  SHOW_PROFILE_REMOVE_IDENTVIDEO_MODAL,
  HIDE_PROFILE_REMOVE_IDENTVIDEO_MODAL
} from './profile-remove-identvideo.types';
import initialState from './profile-remove-identvideo.state';

const profileRemoveIdentvideoModalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SHOW_PROFILE_REMOVE_IDENTVIDEO_MODAL:
      return {
        ...state,
        isVisible: true,
      };
      break;
    case HIDE_PROFILE_REMOVE_IDENTVIDEO_MODAL:
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

export default profileRemoveIdentvideoModalReducer;
