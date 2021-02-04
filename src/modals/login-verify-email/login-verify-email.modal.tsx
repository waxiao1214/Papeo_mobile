import React, { useState } from 'react';
import { View, Modal, Text, Animated } from 'react-native';
import Button from '../../components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { hideLoginVerifyEmail } from '../../store/modals/login-verify-email/login-verify-email.actions';
import s from './styles';
import Colors from '../../styles/colors/colors';

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
            <Text style={s.title}>
              {`An Email was sent to\nexample@outlook.com`}
            </Text>
            <Text style={s.subText}>
              {`Please check your email and click the link\nto continue`}
            </Text>
            <Button 
              title="Send Again" 
              onPress={() => dispatch(hideLoginVerifyEmail())}
              bgColor={Colors.$primary}
              color='white'
            />
          </View>
        </View>
      </Modal>
    </Animated.View>
  );
};

export default LoginVerifyEmailModal;
