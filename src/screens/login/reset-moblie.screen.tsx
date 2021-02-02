import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ReturnButton from '../../components/ReturnButton';
import Colors from '../../styles/colors/colors';
import SelectPhoneNumber from '../../components/SelectPhoneNumber';
import CButton from '../../components/Button'

interface ResetMobileScreen {
  onReturn:Function
}

const ResetMobileScreen = (props:ResetMobileScreen) => {

  return (
    <View style={{marginTop: 42}}>
      <SelectPhoneNumber />
      <View style={{marginTop: 30}}>
        <CButton title='Submit' color='white' bgColor={Colors.$primary} />
      </View>
      <View style={{position: 'absolute', top: -240}}>
        <ReturnButton onClick={() => props.onReturn()}/>
      </View>
    </View>
  )
}

export default ResetMobileScreen;