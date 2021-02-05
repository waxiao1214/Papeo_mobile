import React, {useState} from 'react'
import { View, Image, Modal, Text, Animated } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { hidePartyJoinRequest } from '../../store/modals/party-join-request/party-join-request.actions';
import Button from '../../components/Button';
import Colors from '../../styles/colors/colors';
import ModalHeader from '../components/modal-header/modal-header'
import s from './styles';
import gs from '../styles';
const IMAGE = require('../../assets/img/bg.png')

const PartyJoinRequestedModal = () => {
  const dispatch = useDispatch();
  const [bgFadeAnimation] = useState(new Animated.Value(0));
  const partyJoinRequestedModal = useSelector((state:any) => state.partyJoinRequestModal)
  
  if(!partyJoinRequestedModal.isVisible) {
    return null;
  }

  return (
    <Animated.View style={[gs.animate, { opacity: bgFadeAnimation}]}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={partyJoinRequestedModal.isVisible}
      >
        <View style={[gs.centeredView]}>
          <View style={gs.modalView}>
            <ModalHeader title='Join Party' onClose={() => dispatch(hidePartyJoinRequest())}/>
            <Text style={[s.title, s.white]}>Your request to join</Text>
            <Image style ={s.image} source={IMAGE}/>
            <Text style={[s.subTitle, s.white]}>New Year Anti-COVID Party</Text>
            <Text style={[s.subText, s.white]}>has been successfully sent</Text>
            <Button 
              title='Close' 
              bgColor={Colors.$primary} 
              color='white'
              onPress={() => dispatch(hidePartyJoinRequest())}
            />
          </View>
        </View>
      </Modal>
    </Animated.View>
  )
}

export default PartyJoinRequestedModal;
