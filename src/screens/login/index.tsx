import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, Text, View } from 'react-native';
import styles from '../../styles/screens/login.style';
import { 
  LOGIN_TITLE, 
  DESCRIPTION,
  LOGIN,
  CODE_EDIT,
  CODE_EDIT_TITLE,
  CODE_EDIT_DESCRIPTION,
  EDIT_NUMBER,
  EDIT_NUM_DESCRIPTION,
  EDIT_NUM_TITLE,
} from '../../constant/login/data';
import LoginScreen from './Login';
import Colors from '../../styles/colors/colors';
import EnterCode from './EnterCode';
import EditNumber from './EditMobileNum';

const BACK_IMAGE = require('../../assets/img/bg.png')

const Login = () => {
  const [title, setTitle] = useState(LOGIN_TITLE)
  const [description, setDescription] = useState(DESCRIPTION)
  const [status, setStatus] = useState(LOGIN)

  const onLogin = () => {
    setTitle(CODE_EDIT_TITLE)
    setDescription(CODE_EDIT_DESCRIPTION)
    setStatus(CODE_EDIT)
  }
  const renderBody = () => {
    switch(status){
      case LOGIN:
        return <LoginScreen onLogin={onLogin}/>
      case CODE_EDIT:
        return <EnterCode 
          phoneNumber={'7127172637162'}
          onEditNumber={() => {
            setStatus(EDIT_NUMBER)
            setTitle(EDIT_NUM_TITLE)
            setDescription(EDIT_NUM_DESCRIPTION)
          }}
        />
      case EDIT_NUMBER:
        return <EditNumber 
          onReturn={() => {
            onLogin()
          }}
        />
    }
  }
  return (
    <ImageBackground source={BACK_IMAGE} style={{flex:1}}>
      <SafeAreaView style={styles.container}>
        <View style={{paddingLeft: 20, paddingRight: 20, flex: 1, position: 'relative'}}>
          <View style={styles.header}>
            <Text style={{...styles.f20, ...styles.white, ...styles.bold, textAlign: 'center'}}>
              {`${title}`}
            </Text>
            <View style={styles.line}></View>
            <Text style={{...styles.description, ...styles.white, textAlign: 'center'}}>
              {`${description}`}
            </Text>
          </View>
          <View style={{flex: 1}}>
            {/* screens */}
            {renderBody()}
            {/* terms and conditions */}
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
      </SafeAreaView>
    </ImageBackground>
  )
}

export default Login;
