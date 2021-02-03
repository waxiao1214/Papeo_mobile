import React from 'react';
import RenderWidgetsProps from './render-widgets.interface';
import CreatePartyDescriptionWidget from '../../widgets/create-party-description/create-party-description.widget';
import CreatePartyNameWidget from '../../widgets/create-party-name/create-party-name.widget';

const RenderWidgets: React.FC<RenderWidgetsProps> = ({ step }) => {
  switch (step) {
    case 1:
      return <CreatePartyNameWidget />;
    case 2:
      return <CreatePartyDescriptionWidget />;
    default:
      return null;
  }
};

export default RenderWidgets;
