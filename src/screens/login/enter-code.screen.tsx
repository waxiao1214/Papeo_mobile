import React, { useCallback, useEffect, useState } from 'react';
import { EDIT_CODE_SENDING1, EDIT_CODE_SENDING2 } from '../../constant/login/data'
import { Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Feature from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import Colors from '../../styles/colors/colors';
import styles from '../../styles/screens/login.style';
Feather.loadFont()

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

interface EnterCode {
  phoneNumber:string,
}

const EnterCode = (props:EnterCode) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: 6})
  const [timing, setTiming] = useState(30)
  const [resendCode, setResendCode] = useState(false)

  useEffect(() => {
    if(timing > 0)
      setTimeout(function() {
        setTiming(timing - 1)
      }, 1000)
    if(timing === 0)
      setResendCode(true)
  }, [timing])

  const onResendCode = () => {
    setTiming(30)
    setResendCode(false)
  }

  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue });
  return (
    <View style={{marginTop: -16}}>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={{...styles.white, ...styles.bold, textAlign: 'center'}}>
          {`${props.phoneNumber}`}
        </Text>
        <Feather name='edit-3' style={styles.editIcon} color={Colors.$primary} />
        <Text style={{color: Colors.$primary}}>Edit</Text>
      </View>
      <CodeField
        ref={ref}
        {...prop}
        value={value}
        onChangeText={setValue}
        cellCount={6}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <View style={{marginTop: 20}}>
        <Button title='Submit' color={'white'} bgColor={Colors.$primary}/>
      </View>
      { resendCode ? 
        <View style={{marginTop: 20}}>
          <Button title='Resend PIN code' color='white' onPress={onResendCode}/>
        </View>:
        <View style={{justifyContent: 'center', marginTop: 25}}>
          <Text style={{textAlign: 'center', marginBottom: 10}}>
            <Feature name='clock' style={{fontSize: 20, ...styles.gray}}/>
          </Text>
          <Text style={{...styles.gray, ...styles.f16, textAlign: 'center', lineHeight: 20}}>
            {`${EDIT_CODE_SENDING1} ${timing} ${EDIT_CODE_SENDING2}`}
          </Text>
        </View>
      }
    </View>
  )
}

export default EnterCode;
