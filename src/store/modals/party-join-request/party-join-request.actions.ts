import {
  SHOW_PARTY_JOIN_REQUEST_MODAL,
  HIDE_PARTY_JOIN_REQUEST_MODAL,
} from './party-join-request.types';

export const showPartyJoinRequest = () => {
  return {
    type: SHOW_PARTY_JOIN_REQUEST_MODAL,
  };
};

export const hidePartyJoinRequest = () => {
  return {
    type: HIDE_PARTY_JOIN_REQUEST_MODAL,
  };
};
