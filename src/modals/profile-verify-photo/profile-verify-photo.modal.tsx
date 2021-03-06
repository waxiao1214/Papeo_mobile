import React, {useState} from 'react';
import { View, Image, Modal, Text, Animated, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { hideProfileVerifyPhoto } from '../../store/modals/profile-verify-photo/profile-verify-photo.actions';
import Colors from '../../styles/colors/colors';
import Button from '../../components/Button';
import ModalHeader from '../components/modal-header/modal-header';
import s from './styles';
import gs from '../styles';

const screenWidth = Dimensions.get('window').width;
const IMAGE = require('../../assets/img/verify.png');

const ProfileVerifyPhotoModal = () => {
  const dispatch = useDispatch()
  const [bgFadeAnimation] = useState(new Animated.Value(0));
  const profileVerifyPhotoMoal = useSelector((state:any) => state.profileVerifyPhotoModal)
  
  if(!profileVerifyPhotoMoal.isVisible) {
    return null;
  }
  
  return (
    <Animated.View style={[gs.animate, { opacity: bgFadeAnimation} ]} >
      <Modal animationType='slide' transparent={true} visible={true} >
        <View style={[gs.centeredView]}>
          <View style={[gs.modalView]}>
            <ModalHeader title='Verify Your profile' onClose={() => dispatch(hideProfileVerifyPhoto())}/>
            <View style={s.headerImage}>
              <Image source={IMAGE} style={{width: screenWidth - 30}}/>
            </View>
            <Text style={s.description}>
            {'Make a short video. Show your face and  a piece of paper with your name and age to the camera. Say your name and your age. \n\nYour video will be visible to all Papeo users in your profile. You now have between 10 and 30 seconds to present yourself.'} 
            </Text>
            <Text style={s.doYourBest}>
              Do your best.
            </Text>
            <View style={s.buttons}>
              <View style={{flex:1}}>
                <Button title='Cancel' borderColor={'#25233D'} color='white' onPress={() => dispatch(hideProfileVerifyPhoto())} />
              </View>
              <View style={{flex:1}}>
                <Button title='Save' bgColor={Colors.$primary} color='white' onPress={() => {}} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </Animated.View>
  )
}

export default ProfileVerifyPhotoModal;