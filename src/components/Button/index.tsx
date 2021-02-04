import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import Colors from '../../styles/colors/colors';
import styles from './button.style';

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
        ...styles.container,
        backgroundColor: bgColor,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: SIZE,
        justifyContent: 'center',
        borderColor: borderColor || Colors.$primary,
      }}
      onPress={() => onPress()}>
      <View>{icon}</View>
      <Text
        style={{
          color: color,
          fontSize: 18,
          marginLeft: 12,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
