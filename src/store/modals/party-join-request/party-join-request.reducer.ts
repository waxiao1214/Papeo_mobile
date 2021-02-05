import {
  SHOW_PARTY_JOIN_REQUEST_MODAL,
  HIDE_PARTY_JOIN_REQUEST_MODAL
} from './party-join-request.types';
import initialState from './party-join-request.state';

const partyJoinRequestModalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SHOW_PARTY_JOIN_REQUEST_MODAL:
      return {
        ...state,
        isVisible: true,
      };
      break;
    case HIDE_PARTY_JOIN_REQUEST_MODAL:
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

export default partyJoinRequestModalReducer;
