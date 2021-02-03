import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import Colors from '../../styles/colors/colors';
import ReturnButton from '../../components/ReturnButton';
import InputText from '../../components/TextInput';

const EnterEmailScreen = () => {
  return (
    <>
      <View style={{ marginTop: 30 }}>
        <InputText />
      </View>
      <View style={{ marginTop: 25 }}>
        <Button title="Continue" bgColor={Colors.$primary} color="white" onPress={() => {}} />
      </View>
      <View style={{ position: 'absolute', top: -200 }}>
        <ReturnButton onClick={() => {}} />
      </View>
    </>
  );
};

export default EnterEmailScreen;
