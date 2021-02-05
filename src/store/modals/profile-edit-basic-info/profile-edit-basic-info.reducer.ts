import {
  SHOW_PROFILE_EDIT_BASIC_INFO_MODAL,
  HIDE_PROFILE_EDIT_BASIC_INFO_MODAL,
} from './profile-edit-basic-info.types';
import initialState from './profile-edit-basic-info.state';

const profileEditBasicInfoModalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SHOW_PROFILE_EDIT_BASIC_INFO_MODAL:
      return {
        ...state,
        isVisible: true,
      };
      break;
    case HIDE_PROFILE_EDIT_BASIC_INFO_MODAL:
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

export default profileEditBasicInfoModalReducer;