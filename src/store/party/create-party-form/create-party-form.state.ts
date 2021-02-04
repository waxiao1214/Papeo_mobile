import { createPartyFormInitialState } from './create-party-form.interface';

const initialState: createPartyFormInitialState = {
  step: 1,

  name: '',
  description: '',
  informationForAcceptedGuests: '',
  tags: [],
  isPrivate: false,
  isClosed: false,
  street: '',
  houseNumber: '',
  city: '',
  country: '',
  postcode: 12345,
  locationLatitude: 0,
  locationLongitude: 0,
  startAt: new Date(),
  endAt: new Date(),
  guestsLimit: 0,
  entry: '',
};

export default initialState;
