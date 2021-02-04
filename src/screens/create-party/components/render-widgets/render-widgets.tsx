import React from 'react';
import RenderWidgetsProps from './render-widgets.interface';
import CreatePartyDescriptionWidget from '../../widgets/create-party-description/create-party-description.widget';
import CreatePartyNameWidget from '../../widgets/create-party-name/create-party-name.widget';
import CreatePartyTypeWidget from '../../widgets/create-party-type/create-party-type.widget';
import CreatePartyPrivacyWidget from '../../widgets/create-party-privacy/create-party-privacy.widget';
import CreatePartyLocationWidget from '../../widgets/create-party-location/create-party-location.widget';
import CreatePartyDateWidget from '../../widgets/create-party-date/create-party-date.widget';
import CreatePartyGuestInfoWidget from '../../widgets/create-party-guest-info/create-party-guest-info.widget';
import CreatePartyPaymentsWidget from '../../widgets/create-party-payments/create-party-payments.widget';
import CreatePartyGuestLimitWidget from '../../widgets/create-party-guest-limit/create-party-guest-limit.widget';
import CreatePartyMediaWidget from '../../widgets/create-party-media/create-party-media.widget';

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
    case 8:
      return <CreatePartyPaymentsWidget />;
    case 9:
      return <CreatePartyGuestLimitWidget />;
    case 10:
      return <CreatePartyMediaWidget />;
    default:
      return null;
  }
};

export default RenderWidgets;
