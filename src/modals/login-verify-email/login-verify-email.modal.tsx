import React, { useState } from 'react';
import { View, Modal, Text, Animated, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { hideLoginVerifyEmail } from '../../store/modals/login-verify-email/login-verify-email.action';
import s from './styles';

const LoginVerifyEmailModal = () => {
  const dispatch = useDispatch();
  const [bgFadeAnimation] = useState(new Animated.Value(0));
  const loginVerifyEmailModal = useSelector((state: any) => state.loginVerifyEmailModal);

  if (!loginVerifyEmailModal.isVisible) {
    return null;
  }

  const fadeIn = () => {
    Animated.timing(bgFadeAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = (callback: Function) => {
    Animated.timing(bgFadeAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => callback());
  };

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          backgroundColor: 'red',
          width: '100%',
          height: '100%',
          opacity: bgFadeAnimation,
        },
      ]}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={loginVerifyEmailModal.isVisible}
        style={{}}>
        <View style={[s.centeredView]}>
          <View style={s.modalView}>
            <Text>HEloooooo</Text>
            <Text>HEloooooo</Text>
            <Text>HEloooooo</Text>
            <Text>HEloooooo</Text>
            <Text>HEloooooo</Text>
            <Text>HEloooooo</Text>
            <Text>HEloooooo</Text>
            <Button title="close" onPress={() => dispatch(hideLoginVerifyEmail())}></Button>
          </View>
        </View>
      </Modal>
    </Animated.View>
  );
};

export default LoginVerifyEmailModal;
