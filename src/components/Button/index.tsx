import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import Colors from '../../styles/colors/colors';
import styles from '../../styles/components/button.style';

interface ButtonProps {
  title: string;
  icon?: any;
  bgColor?: string;
  style?: object;
  color?: string;
  onPress?: Function;
}

const CustomButton = (props: ButtonProps) => {
  const { title, icon, style, color, onPress, bgColor } = props;

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: bgColor,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
      onPress={() => onPress()}>
      <View style={{ marginTop: 8 }}>{icon}</View>
      <Text
        style={{
          color: color,
          fontSize: 18,
          marginTop: 8,
          marginLeft: 8,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
