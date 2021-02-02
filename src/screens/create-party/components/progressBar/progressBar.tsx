import React from 'react';
import { Text, View } from 'react-native';
import * as Progress from 'react-native-progress';

export const ProgressBar: React.FC = () => {
  return (
    <View>
        <Text>Step 1/11</Text>
        <Progress.Bar />
    </View>
  );
};
