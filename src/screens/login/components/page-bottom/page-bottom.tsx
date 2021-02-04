import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import s from '../../style';
import Colors from '../../../../styles/colors/colors';

const screenHeight = Math.round(Dimensions.get('window').height);

const PageBottom = () => {
  return (
    <View style={[s.terms, { height: screenHeight - 570 }]}>
      <Text style={s.white}>
        With registration you accept the general
        <Text style={{ color: Colors.$primary }}>Terms</Text>
      </Text>
      <Text style={s.white}>
        and
        <Text style={{ color: Colors.$primary }}>Conditions</Text>
      </Text>
    </View>
  );
};

export default PageBottom;
