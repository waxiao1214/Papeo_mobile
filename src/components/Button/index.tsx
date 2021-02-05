import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import Colors from '../../styles/colors/colors';
import s from './button.style';

interface ButtonProps {
  title: string;
  icon?: any;
  bgColor?: string;
  style?: object;
  color?: string;
  onPress?: Function;
  borderColor?:string,
  size?:string
}

const CustomButton = (props: ButtonProps) => {
  const { title, icon, style, color, onPress, bgColor, borderColor, size } = props;
  let SIZE = 46  
  if(size === 'small') SIZE = 36;
  if(size === 'large') SIZE = 55
  return (
    <TouchableOpacity
      style={{
        ...s.container,
        backgroundColor: bgColor,
        height: SIZE,
        borderColor: borderColor || Colors.$primary,
      }}
      onPress={() => onPress()}>
      {icon && <View style={s.icon}>{icon}</View>}
      <Text style={{ color: color }} > {title} </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
