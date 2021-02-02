import React, { useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/screens/login.style';
import Button from '../../components/Button';
import SelectPhoneNumber from '../../components/SelectPhoneNumber'
import Colors from '../../styles/colors/colors';

FontAwesome.loadFont()

const BACK_IMAGE = require('../../assets/img/bg.png')

const LoginScreen = () => {
  const [openCountryModal, setOpenCountryModal] = useState(false)
  const Login = () => {

  }
  const loginWithGoogle = () => {

  }
  return (
    <>
      <View style={{marginTop: 30}}>
        <SelectPhoneNumber onPress={setOpenCountryModal}/>
      </View>
      <View style={{marginTop: 25}}>
        <Button title='Login' color={'white'} bgColor={Colors.$primary} onPress={Login}/>
      </View>
      <Text style={{...styles.white, marginTop: 20, textAlign: 'center'}}>or</Text>
      <View style={{marginTop: 15}}>
        <Button 
          title='Login with Google' 
          color={'white'} 
          onPress={loginWithGoogle}
          icon={
            <FontAwesome 
              name='google' 
              color='white' 
              style={{fontSize: 24}}
            />
          }
        />
      </View>
    </>
  )
}

export default LoginScreen;
