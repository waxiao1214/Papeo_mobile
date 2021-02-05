import React, {useState} from 'react';
import { View, Image, Modal, Text, Animated, Dimensions } from 'react-native';
import Button from '../../components/Button';
import Colors from '../../styles/colors/colors';
import ModalHeader from '../components/modal-header/modal-header';
import s from './styles';
import gs from '../styles';

const ProfileEditDescriptionModal = () => {
  const [bgFadeAnimation] = useState(new Animated.Value(0));
  return (
    <Animated.View style={[gs.animate, { opacity: bgFadeAnimation} ]} >
      <Modal animationType='slide' transparent={true} visible={true} >
        <View style={[gs.centeredView]}>
          <View style={[gs.modalView]}>
            <ModalHeader title='Change description' onClose={() => {}}/>
            <Text style={s.subTitle}>
              Your Description
            </Text>
            <Text style={s.description}>
              We are experienced in undertaking events for Weddings, Birthday Parties, Anniversaries, Dinner Dances, Reunions, Proms, Christmas Parties,
            </Text>
            <View style={gs.buttons}>
              <View style={{flex: 1, marginRight: 4}}>
                <Button title='Cancel' borderColor='#25233D' color='white'/>
              </View>
              <View style={{flex: 1, marginLeft: 4}}>
                <Button title='Save' bgColor={Colors.$primary} color='white'/>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </Animated.View>
  )
}

export default ProfileEditDescriptionModal;