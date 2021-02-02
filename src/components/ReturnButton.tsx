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
          backgroundColor: 'rgba(46, 35, 66, 0.6)', 
          padding: 8
        }}>
        <Feather name='arrow-left' color='white' size={20}/>
      </View>        
    </TouchableOpacity>
  )
}

export default ReturnButton;
