import React from 'react';
import { View, Text } from 'react-native';
import PageInfoProps from './page-info.interface';
import s from '../../style';

const PageInfo: React.FC<PageInfoProps> = ({ title, description }) => {
  return (
    <View style={s.header}>
      <Text style={[s.f20, s.white, s.bold, s.center]}>{`${title}`}</Text>
      <View style={s.line}></View>
      <Text style={[s.description, s.white, s.center]}>{`${description}`}</Text>
    </View>
  );
};

export default PageInfo;
