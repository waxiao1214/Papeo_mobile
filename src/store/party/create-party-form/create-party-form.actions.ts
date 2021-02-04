import { UPDATE_CREATE_PARTY_FORM } from './create-party-form.types';
import { updateCreatePartyFormPayload } from './create-party-form.interface';

export const updateCreatePartyForm = (payload: updateCreatePartyFormPayload) => {
  const payloadChecked: updateCreatePartyFormPayload = {};

  // Middleware will added

  switch (true) {
    case payload.hasOwnProperty('step'):
      payloadChecked['step'] = payload.step;
    case payload.hasOwnProperty('name'):
      payloadChecked['name'] = payload.name;
    case payload.hasOwnProperty('description'):
      payloadChecked['description'] = payload.description;
    case payload.hasOwnProperty('informationForAcceptedGuests'):
      payloadChecked['informationForAcceptedGuests'] = payload.informationForAcceptedGuests;
    case payload.hasOwnProperty('tags'):
      payloadChecked['tags'] = payload.tags;
    case payload.hasOwnProperty('isPrivate'):
      payloadChecked['isPrivate'] = payload.isPrivate;
    case payload.hasOwnProperty('isClosed'):
      payloadChecked['isClosed'] = payload.isClosed;
    case payload.hasOwnProperty('street'):
      payloadChecked['street'] = payload.street;
    case payload.hasOwnProperty('houseNumber'):
      payloadChecked['houseNumber'] = payload.houseNumber;
    case payload.hasOwnProperty('city'):
      payloadChecked['city'] = payload.city;
    case payload.hasOwnProperty('country'):
      payloadChecked['country'] = payload.country;
    case payload.hasOwnProperty('postcode'):
      payloadChecked['postcode'] = payload.postcode;
    case payload.hasOwnProperty('locationLatitude'):
      payloadChecked['locationLatitude'] = payload.locationLatitude;
    case payload.hasOwnProperty('locationLongitude'):
      payloadChecked['locationLongitude'] = payload.locationLongitude;
    case payload.hasOwnProperty('startAt'):
      payloadChecked['startAt'] = payload.startAt;
    case payload.hasOwnProperty('endAt'):
      payloadChecked['endAt'] = payload.endAt;
    case payload.hasOwnProperty('guestsLimit'):
      payloadChecked['guestsLimit'] = payload.guestsLimit;
    case payload.hasOwnProperty('entry'):
      payloadChecked['entry'] = payload.entry;
  }

  return {
    type: UPDATE_CREATE_PARTY_FORM,
    payload: payloadChecked,
  };
};
