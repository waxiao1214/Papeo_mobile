import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import Colors from '../../styles/colors/colors';
import styles from '../../styles/components/button.style';

interface ButtonProps {
  title: string,
  icon?:any,
  bgColor: string,
  style?:object,
  color?:string,
  onPress?:Function
}

const CustomButton = (props) => {
  const { title, icon, style, color, onPress, bgColor } = props

  return (
    <View style={{
      ...styles.container, 
      backgroundColor: bgColor, 
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
      }}
    >
      <View style={{marginTop: 6}}>{icon}</View>
      <Button title={title} color={color} onPress={onPress} />
    </View>
  )
}

export default CustomButton
