import {
  SHOW_PROFILE_EDIT_DESCRIPTION_MODAL,
  HIDE_PROFILE_EDIT_DESCRIPTION_MODAL,
} from './profile-edit-description.types';
import initialState from './profile-edit-description.state';

const profileEditDescriptionModalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SHOW_PROFILE_EDIT_DESCRIPTION_MODAL:
      return {
        ...state,
        isVisible: true,
      };
      break;
    case HIDE_PROFILE_EDIT_DESCRIPTION_MODAL:
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

export default profileEditDescriptionModalReducer;