import React from 'react';
import { View } from 'react-native';
import ProgressBarProps from './progressBar.interface';
import { styles } from './styles';

export const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const width = props.step * 100 / 11;
  return (
    <View style={styles.container}>
      <View style={styles.bar} />
    </View>
  );
};
