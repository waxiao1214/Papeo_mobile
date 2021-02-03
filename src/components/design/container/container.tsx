import React from 'react';
import { View, SafeAreaView } from 'react-native';
import s from './styles';

// first example, we have to make it better

const Container: React.FC<any> = ({children, padding, marginTop }) => {

  let containerStyle: any = {};

  if(padding){
    containerStyle['paddingLeft'] = 20;
    containerStyle['paddingRight'] = 20;
  }

  if(marginTop){
    containerStyle['marginTop'] = 20;
  }

  return (
    <View style={containerStyle}>
      { children }
    </View>
    );
};

export default Container;
