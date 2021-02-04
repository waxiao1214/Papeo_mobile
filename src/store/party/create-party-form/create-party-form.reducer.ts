import { UPDATE_CREATE_PARTY_FORM } from './create-party-form.types';
import initialState from './create-party-form.state';

const createPartyFormReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_CREATE_PARTY_FORM:
      return {
        ...state,
        ...action.payload,
      };
      break;
    default:
      return state;
      break;
  }
};

export default createPartyFormReducer;
