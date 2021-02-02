import React, { useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import styles from '../../styles/screens/login.style';
import { LOGIN_TITLE, DESCRIPTION } from '../../constant/login/data';
import LoginScreen from './login-screen';
import Colors from '../../styles/colors/colors';

const BACK_IMAGE = require('../../assets/img/bg.png')

const Login = () => {
  const [title, setTitle] = useState(LOGIN_TITLE)
  const [description, setDescription] = useState(DESCRIPTION)

  return (
    <ImageBackground source={BACK_IMAGE} style={{flex:1}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{...styles.f20, ...styles.white, ...styles.bold, textAlign: 'center'}}>
            {`${title}`}
          </Text>
          <View style={styles.line}></View>
          <Text style={{...styles.description, ...styles.white, textAlign: 'center'}}>
            {`${description}`}
          </Text>
        </View>
        <View style={{position: 'relative', flex: 1}}>
          <LoginScreen/>
          <View style={styles.terms}>
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
      </View>
    </ImageBackground>
  )
}

export default Login;

