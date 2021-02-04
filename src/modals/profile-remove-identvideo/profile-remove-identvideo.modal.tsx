import React, {useState} from 'react';
import { View, Image, Modal, Text, Animated, Dimensions } from 'react-native';
import Colors from '../../styles/colors/colors';
import Button from '../../components/Button';
import ModalHeader from '../components/modal-header/modal-header';
import s from './styles';
import gs from '../styles';

const ProfileRemoveIdentvideoModal = () => {
  const [bgFadeAnimation] = useState(new Animated.Value(0));
  return (
    <Animated.View style={[gs.animate, { opacity: bgFadeAnimation} ]} >
      <Modal animationType='slide' transparent={true} visible={true} >
        <View style={[gs.centeredView]}>
          <View style={[gs.modalView]}>
            <ModalHeader title='' onClose={() => {}}/>
            <Text style={s.text}>
              Do you really want to delete your identvideo?
            </Text>
            <View style={[gs.buttons, s.buttons]}>
              <View style={{flex: 1}}>
                <Button title='Cancel' borderColor='#25233D' color='white' onPress={() => {}}/>
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