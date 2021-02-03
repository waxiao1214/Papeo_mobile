import React from 'react';
import RenderWidgetsProps from './render-widgets.interface';
import CreatePartyDescriptionWidget from '../../widgets/create-party-description/create-party-description.widget';
import CreatePartyNameWidget from '../../widgets/create-party-name/create-party-name.widget';
import CreatePartyTypeWidget from '../../widgets/create-party-type/create-party-type.widget';

const RenderWidgets: React.FC<RenderWidgetsProps> = ({ step }) => {
  switch (step) {
    case 1:
      return <CreatePartyNameWidget />;
    case 2:
      return <CreatePartyDescriptionWidget />;
    case 3:
      return <CreatePartyTypeWidget />;
    default:
      return null;
  }
};

export default RenderWidgets;
