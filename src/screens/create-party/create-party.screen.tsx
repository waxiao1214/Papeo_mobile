import React, { useState } from 'react';
import { ProgressBar } from './components/progress-bar/progress-bar';
import TopBar from '../../components/top-bar/top-bar';
import NextButton from './components/next-button/next-button';
import Background from '../../components/design/background/background';
import RenderWidgets from './components/render-widgets/render-widgets';
import { StatusBar } from 'react-native';

const CreatePartyScreen: React.FC = () => {
  const [step, setStep] = useState(1);

  /**
   * This screen should be rerendered whenever tap the next button
   * because we need to display the different widget.
   */

  const goBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const goNext = () => {
    if (step < 11) {
      setStep(step + 1);
    }
  };

  return (
    <Background>
      <StatusBar barStyle={'light-content'} />
      <TopBar onBack={goBack} title="Create Party" step={step} />
      <ProgressBar step={step} />
      <RenderWidgets step={step} />
      {step !== 10 && <NextButton step={step} onPress={goNext} />}
    </Background>
  );
};

export default CreatePartyScreen;
