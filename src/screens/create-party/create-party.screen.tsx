import React, { useState } from 'react';
import { ProgressBar } from './components/progress-bar/progress-bar';
import TopBar from '../../components/top-bar/top-bar';
import NextButton from './components/next-button/next-button';
import Background from '../../components/design/background/background';
import RenderWidgets from './components/render-widgets/render-widgets';

const CreatePartyScreen: React.FC = () => {
  const [step, setStep] = useState(1);
  // if we use useState in Screen, then all components will rerender
  // we have to delete it later
  // parameter step will removed in future too
  // remove this, if readed

  const goBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <Background>
      <TopBar onBack={goBack} />
      <ProgressBar step={step} />
      <RenderWidgets step={step} />
      <NextButton step={step} />
    </Background>
  );
};

export default CreatePartyScreen;
