import React, { useState } from 'react';
import { Modal, Text, View } from 'react-native';
import styles from '../../styles/screens/login.style';
import Button from '../../components/Button';
import SelectPhoneNumber from '../../components/SelectPhoneNumber'
import Colors from '../../styles/colors/colors';
import SelectCountryModal from './select-country.modal';

const BACK_IMAGE = require('../../assets/img/bg.png')

interface LoginScreenProps {
  onLogin:Function
}

const LoginScreen = (props:LoginScreenProps) => {
  const [openCountryModal, setOpenCountryModal] = useState(false)
  const { onLogin } = props;

  const loginWithGoogle = () => {
    
  }
  return (
    <>
      <SelectCountryModal 
        open={openCountryModal}
        onClose={e => setOpenCountryModal(!openCountryModal)}
      />
      <View style={{marginTop: 30}}>
        <SelectPhoneNumber onPress={e => setOpenCountryModal(!openCountryModal)}/>
      </View>
      <View style={{marginTop: 25}}>
        <Button title='Login' color={'white'} bgColor={Colors.$primary} onPress={onLogin}/>
      </View>
      <Text style={{...styles.white, marginTop: 20, textAlign: 'center'}}>or</Text>
      <View style={{marginTop: 15}}>
        <Button title='Login with Google' color={'white'} onPress={loginWithGoogle}/>
      </View>
    </>
  )
}

export default LoginScreen;
