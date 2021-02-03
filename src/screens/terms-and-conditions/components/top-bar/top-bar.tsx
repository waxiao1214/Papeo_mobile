import React from 'react';
import { Text, View } from 'react-native';
import ReturnButton from '../../../../components/ReturnButton';
import s from './styles';

// import top-bar from global components & modify this component.
// we use it on create Party too

const TopBar = () => {
  return (
    <View style={s.header}>
      <View style={{ marginTop: -4 }}>
        <ReturnButton onClick={() => {}} />
      </View>
      <View style={{ marginLeft: 10 }}>
        <Text style={[s.white, s.f24, s.bold]}>Papeo General Terms and Conditions</Text>
        <Text style={[s.gray, s.mt8]}>from 14.12 2020</Text>
      </View>
    </View>
  );
};

export default TopBar;
