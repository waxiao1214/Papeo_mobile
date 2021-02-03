import React, { useState } from 'react';
import { ImageBackground, Text, View, Dimensions } from 'react-native';
import styles from '../../styles/screens/login.style';
import { LOGIN_TITLE, DESCRIPTION } from '../../constant/login/data';
import LoginScreen from './Login';
import Colors from '../../styles/colors/colors';
const screenHeight = Math.round(Dimensions.get('window').height);

const BACK_IMAGE = require('../../assets/img/bg.png')

const Login = () => {
  const [title, setTitle] = useState(LOGIN_TITLE)
  const [description, setDescription] = useState(DESCRIPTION)

  return (
    <ImageBackground source={BACK_IMAGE} style={{flex:1, height: screenHeight}}>
      <View style={{...styles.container, height: screenHeight}}>
        <View style={styles.header}>
          <Text style={{...styles.f20, ...styles.white, ...styles.bold, textAlign: 'center'}}>
            {`${title}`}
          </Text>
          <View style={styles.line}></View>
          <Text style={{...styles.description, ...styles.white, textAlign: 'center'}}>
            {`${description}`}
          </Text>
        </View>
        
        <LoginScreen/>
        
        <View style={{...styles.terms, height: screenHeight- 520}}>
          <Text style={{...styles.white }}>
            {`With registration you accept the general `}
            <Text style={{color: Colors.$primary}}>Terms</Text>
          </Text>
          <Text style={{...styles.white}}>
            {`and `}
            <Text style={{color: Colors.$primary}}>Conditions</Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
  )
}

export default Login;

