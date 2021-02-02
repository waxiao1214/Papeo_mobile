import React from 'react';
import { View, Text } from 'react-native';
import ProgressBarProps from './progress-bar.interface';
import s from './styles';

export const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const width = props.step * 100 / 11;

  const step = 1; // delete in future

  return (
    <View style={s.barContainer}>
      <Text style={s.title}>{`Step ${step}/11`}</Text>
      <View style={s.container}>
        <View style={s.bar} />
      </View>
    </View>
  );
};
