import React, {useState} from 'react';
import { View, Image, Modal, Text, Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { hideProfileRemoveIdentvideo } from '../../store/modals/profile-remove-identvideo/profile-remove-identvideo.actions';
import Colors from '../../styles/colors/colors';
import Button from '../../components/Button';
import ModalHeader from '../components/modal-header/modal-header';
import s from './styles';
import gs from '../styles';

const ProfileRemoveIdentvideoModal = () => {
  const dispatch = useDispatch()
  const [bgFadeAnimation] = useState(new Animated.Value(0));
  const profileRemoveIdentvideoModal = useSelector((state:any) => state.profileRemoveIdentvideoModal)

  if(!profileRemoveIdentvideoModal.isVisible) {
    return null
  }

  return (
    <Animated.View style={[gs.animate, { opacity: bgFadeAnimation} ]} >
      <Modal 
        animationType='slide' 
        transparent={true} 
        visible={profileRemoveIdentvideoModal.isVisible} 
      >
        <View style={[gs.centeredView]}>
          <View style={[gs.modalView]}>
            <ModalHeader title='' onClose={() => dispatch(hideProfileRemoveIdentvideo())}/>
            <Text style={s.text}>
              Do you really want to delete your identvideo?
            </Text>
            <View style={[gs.buttons, s.buttons]}>
              <View style={{flex: 1}}>
                <Button title='Cancel' borderColor='#25233D' color='white' onPress={() => dispatch(hideProfileRemoveIdentvideo())}/>
              </View>
              <View style={{flex: 1}}>
              <Button title='Delete' bgColor={Colors.$primary} color='white' onPress={() => {}}/>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </Animated.View>
  )
}

export default ProfileRemoveIdentvideoModal;