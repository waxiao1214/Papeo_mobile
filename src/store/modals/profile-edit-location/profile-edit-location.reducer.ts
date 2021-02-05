import {
  SHOW_PROFILE_EDIT_LOCATOIN_MODAL,
  HIDE_PROFILE_EDIT_LOCATOIN_MODAL
} from './profile-edit-location.types';
import initialState from './profile-edit-location.state';

const profileEditLocationModalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SHOW_PROFILE_EDIT_LOCATOIN_MODAL:
      return {
        ...state,
        isVisible: true,
      };
      break;
    case HIDE_PROFILE_EDIT_LOCATOIN_MODAL:
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

export default profileEditLocationModalReducer;
