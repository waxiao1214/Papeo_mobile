import React, { useState } from 'react';
import { Modal, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import Button from '../../components/Button';
import SelectPhoneNumber from '../../components/SelectPhoneNumber';
import Colors from '../../styles/colors/colors';
import SelectCountryModal from '../../components/Modals/SelectCountryModal';

FontAwesome.loadFont();

const BACK_IMAGE = require('../../assets/img/bg.png');

interface LoginScreenProps {
  onLogin: Function;
}

const LoginScreen = (props: LoginScreenProps) => {
  const [openCountryModal, setOpenCountryModal] = useState(false);
  const { onLogin } = props;

  const loginWithGoogle = () => {};
  return (
    <>
      <SelectCountryModal
        open={openCountryModal}
        onClose={() => setOpenCountryModal(!openCountryModal)}
      />
      <View style={{ marginTop: 30 }}>
        <SelectPhoneNumber onPress={() => setOpenCountryModal(!openCountryModal)} />
      </View>
      <View style={{ marginTop: 25 }}>
        <Button title="Login" color={'white'} bgColor={Colors.$primary} onPress={onLogin} />
      </View>
      <Text style={{ ...styles.white, marginTop: 20, textAlign: 'center' }}>or</Text>
      <View style={{ marginTop: 15 }}>
        <Button
          title="Login with Google"
          color={'white'}
          onPress={loginWithGoogle}
          icon={<FontAwesome name="google" color="white" style={{ fontSize: 24 }} />}
        />
      </View>
    </>
  );
};

export default LoginScreen;
