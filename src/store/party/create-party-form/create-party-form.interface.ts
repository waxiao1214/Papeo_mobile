export interface createPartyFormInitialState {
  step: number;

  name: string;
  description: string;
  informationForAcceptedGuests: string;
  tags: Array<any>;
  isPrivate: boolean;
  isClosed: boolean;
  street: string;
  houseNumber: string;
  city: string;
  country: string;
  postcode: number;
  locationLatitude: number;
  locationLongitude: number;
  startAt: Date;
  endAt: Date;
  guestsLimit: number;
  entry: string;
}

export interface updateCreatePartyFormPayload {
  step?: number;

  name?: string;
  description?: string;
  informationForAcceptedGuests?: string;
  tags?: Array<any>;
  isPrivate?: boolean;
  isClosed?: boolean;
  street?: string;
  houseNumber?: string;
  city?: string;
  country?: string;
  postcode?: number;
  locationLatitude?: number;
  locationLongitude?: number;
  startAt?: Date;
  endAt?: Date;
  guestsLimit?: number;
  entry?: string;
}
