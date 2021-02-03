import React from 'react';
import { TouchableOpacity, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';

interface ReturnButtonProps {
  onClick:Function
}

const ReturnButton = (props:ReturnButtonProps) => {
  return (
    <TouchableOpacity onPress={() => props.onClick()}>
      <View 
        style={{
          borderRadius: 20, 
          backgroundColor: '#25233D', 
          padding: 8
        }}>
        <Feather name='arrow-left' color='white' size={24}/>
      </View>        
    </TouchableOpacity>
  )
}

export default ReturnButton;
