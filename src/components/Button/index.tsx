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

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: bgColor,
        display: 'flex',
        flexDirection: 'row',
        height: size === 'small' ? 36 : 46,
        justifyContent: 'center',
        borderColor: borderColor || Colors.$primary,
      }}
      onPress={() => onPress()}>
      <View style={{ marginTop: 8 }}>{icon}</View>
      <Text
        style={{
          color: color,
          fontSize: 18,
          marginTop: size === 'small' ? 6 : 8,
          marginLeft: 8,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
