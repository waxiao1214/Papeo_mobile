import React from 'react';
import { View, SafeAreaView } from 'react-native';
import s from './styles';

const Background: React.FC = (props: any) => {
  return (
    <View style={s.container}>
      <SafeAreaView>{props.children}</SafeAreaView>
    </View>
  );
};

export default Background;
