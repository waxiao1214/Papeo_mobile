import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import SelectCountryModal from '../../components/Modals/SelectCountryModal';
import ReturnButton from '../../components/ReturnButton';
import Colors from '../../styles/colors/colors';
import SelectPhoneNumber from '../../components/SelectPhoneNumber';
import CButton from '../../components/Button'

interface ResetMobileScreen {
  onReturn:Function
}

const EditNumber = (props:ResetMobileScreen) => {
  const [openCountryModal, setOpenCountryModal] = useState(false)
  // const { onLogin } = props;

  const loginWithGoogle = () => {
    
  }
  return (
    <View style={{marginTop: 36}}>
      <SelectCountryModal 
        open={openCountryModal}
        onClose={() => setOpenCountryModal(!openCountryModal)}
      />
      <SelectPhoneNumber onPress={e => setOpenCountryModal(!openCountryModal)}/>
      <View style={{marginTop: 25}}>
        <CButton title='Submit' color='white' bgColor={Colors.$primary} />
      </View>
      <View style={{position: 'absolute', top: -240}}>
        <ReturnButton onClick={() => props.onReturn()}/>
      </View>
    </View>
  )
}

export default EditNumber;