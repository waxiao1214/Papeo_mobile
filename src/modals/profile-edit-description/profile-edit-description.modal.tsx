import React, {useState} from 'react';
import { View, Image, Modal, Text, Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { hideProfileEditDescription } from '../../store/modals/profile-edit-description/profile-edit-description.actions';
import Button from '../../components/Button';
import Colors from '../../styles/colors/colors';
import ModalHeader from '../components/modal-header/modal-header';
import s from './styles';
import gs from '../styles';
import { hidePartyJoinRequest } from '../../store/modals/party-join-request/party-join-request.actions';

const ProfileEditDescriptionModal = () => {
  const dispatch = useDispatch()
  const [bgFadeAnimation] = useState(new Animated.Value(0));
  const profileEditDescriptionModal = useSelector((state:any) => state.profileEditDescriptionModal)

  if(!profileEditDescriptionModal.isVisible) {
    return null;
  }

  return (
    <Animated.View style={[gs.animate, { opacity: bgFadeAnimation} ]} >
      <Modal 
        animationType='slide' 
        transparent={true} 
        visible={profileEditDescriptionModal.isVisible} 
      >
        <View style={[gs.centeredView]}>
          <View style={[gs.modalView]}>
            <ModalHeader title='Change description' onClose={() => dispatch(hideProfileEditDescription())}/>
            <Text style={s.subTitle}>
              Your Description
            </Text>
            <Text style={s.description}>
              We are experienced in undertaking events for Weddings, Birthday Parties, Anniversaries, Dinner Dances, Reunions, Proms, Christmas Parties,
            </Text>
            <View style={gs.buttons}>
              <View style={{flex: 1, marginRight: 4}}>
                <Button title='Cancel' borderColor='#25233D' color='white' onPress={() => dispatch(hideProfileEditDescription())}/>
              </View>
              <View style={{flex: 1, marginLeft: 4}}>
                <Button title='Save' bgColor={Colors.$primary} color='white' onPress={() => {}}/>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </Animated.View>
  )
}

export default ProfileEditDescriptionModal;