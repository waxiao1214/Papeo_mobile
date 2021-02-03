import React from 'react';
import RenderWidgetsProps from './render-widgets.interface';
import CreatePartyDescriptionWidget from '../../widgets/create-party-description/create-party-description.widget';
import CreatePartyNameWidget from '../../widgets/create-party-name/create-party-name.widget';
import CreatePartyTypeWidget from '../../widgets/create-party-type/create-party-type.widget';
import CreatePartyPrivacyWidget from '../../widgets/create-party-privacy/create-party-privacy.widget';
import CreatePartyLocationWidget from '../../widgets/create-party-location/create-party-location.widget';
import CreatePartyDateWidget from '../../widgets/create-party-date/create-party-date.widget';
import CreatePartyGuestInfoWidget from '../../widgets/create-party-guest-info/create-party-guest-info.widget';

const RenderWidgets: React.FC<RenderWidgetsProps> = ({ step }) => {
  switch (step) {
    case 1:
      return <CreatePartyNameWidget />;
    case 2:
      return <CreatePartyDescriptionWidget />;
    case 3:
      return <CreatePartyTypeWidget />;
    case 4:
      return <CreatePartyPrivacyWidget />;
    case 5:
      return <CreatePartyLocationWidget />;
    case 6:
      return <CreatePartyDateWidget />;
    case 7:
      return <CreatePartyGuestInfoWidget />;
    default:
      return null;
  }
};

export default RenderWidgets;
