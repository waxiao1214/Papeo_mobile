import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import Colors from '../../styles/colors/colors';
import styles from '../../styles/components/button.style';

interface ButtonProps {
  title: string,
  icon:any,
  bgColor: string,
  style?:object,
  color?:string,
  onPress?:Function
}

const CustomButton = (props) => {
  const { title, icon, style, color, onPress, bgColor } = props

  return (
    <TouchableOpacity style={{...styles.container, backgroundColor: bgColor}}>
      <Text 
        style={{
          color: color,
          textAlign: 'center',
          fontSize: 18,
          marginTop: 10
        }} 
        onPress={onPress}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton
