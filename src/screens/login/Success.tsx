import React from 'react';
import { Text, View, Image } from 'react-native';
import Button from '../../components/Button';
import Colors from '../../styles/colors/colors';

const SUCCESS = require('../../assets/img/success.png')

const LoginSuccessScreen = () => {
  return (
    <View>
      <View 
        style={{
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Image 
          source={SUCCESS} 
          style={{
            width: 40,
            height: 40,
          }}
        />
      </View>
      <Text style={{
        color: 'white',
        fontWeight: '900',
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center'
      }}>
          {`Your email was \n successfully registered`}
      </Text>
      <View style={{marginTop: 40}}>
        <Button title='Continue' bgColor={Colors.$primary} color='white' onPress={() => {}}/>
      </View>
    </View>
  )
}

export default LoginSuccessScreen;
