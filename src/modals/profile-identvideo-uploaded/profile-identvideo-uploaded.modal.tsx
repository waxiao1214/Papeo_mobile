import React, {useState} from 'react';
import { View, Image, Modal, Text, Animated, Dimensions } from 'react-native';
import Button from '../../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { hideProfileIdentvideoUploaded } from '../../store/modals/profile-identvideo-uploaded/profile-identvideo-uploaded.actions';
import Colors from '../../styles/colors/colors';
import Icon from '../../components/icon/icon';
import ModalHeader from '../components/modal-header/modal-header';
import s from './styles';
import gs from '../styles';

const screenWidth = Dimensions.get('window').width;

const IMAGE = require('../../assets/img/verify.png')

const ProfileIdentivideoUploadedModal = () => {
  const dispatch = useDispatch()
  const [bgFadeAnimation] = useState(new Animated.Value(0));
  const profileIdentvideoUploadedModal = useSelector((state:any) => state.profileIdentvideoUploadedModal)
  
  if(!profileIdentvideoUploadedModal.isVisible) {
    return null;
  }

  return (
    <Animated.View style={[gs.animate, { opacity: bgFadeAnimation} ]} >
      <Modal 
        animationType='slide' 
        transparent={true} 
        visible={profileIdentvideoUploadedModal.isVisible} 
      >
        <View style={[gs.centeredView]}>
          <View style={[gs.modalView, s.modalView]}>
            <ModalHeader title='' onClose={() => dispatch(hideProfileIdentvideoUploaded())}/>
            <View style={s.headerImage}>
              <Image source={IMAGE} style={{width: screenWidth - 30}}/>
            </View>
            <View style={s.verify}>
              <Icon name='verify' size={42}/>
            </View>            
            <Text style={s.title}>
              Your video will be verified
            </Text>
            <View style={s.button}>
              <Button title='Close' color='white' borderColor='#FFFFFF00' onPress={() => dispatch(hideProfileIdentvideoUploaded())}/>
            </View>
          </View>
        </View>
      </Modal>
    </Animated.View>
  )
}

export default ProfileIdentivideoUploadedModal;