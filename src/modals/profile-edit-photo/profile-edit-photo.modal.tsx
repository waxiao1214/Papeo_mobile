import React, {useState} from 'react';
import { View, Image, Modal, Text, Animated, Dimensions } from 'react-native';
import Colors from '../../styles/colors/colors';
import Button from '../../components/Button';
import Icon from '../../components/icon/icon';
import ModalHeader from '../components/modal-header/modal-header';
import s from './styles';
import gs from '../styles';

const USER = require('../../assets/img/user.png')

const ProfileEditPhotoModal = () => {
  const [bgFadeAnimation] = useState(new Animated.Value(0));
  return (
    <Animated.View style={[gs.animate, { opacity: bgFadeAnimation} ]} >
      <Modal animationType='slide' transparent={true} visible={true} >
        <View style={[gs.centeredView]}>
          <View style={[gs.modalView]}>
            <ModalHeader title='Edit profile photo' onClose={() => {}}/>
            <Image source={USER} style={s.image}/>
            <View style={[gs.buttons, s.buttons]}>
              <View style={{flex: 1, marginRight: 4}}>
                <Button 
                  title='Camera' borderColor='#585b64' color='white' onPress={() => {}} size='large'
                  icon={<Icon name={'camera-front'} size={28} />}
                />
              </View>
              <View style={{flex: 1, marginLeft: 4}}>
                <Button 
                  title='Gallery' borderColor='#585b64' color='white' onPress={() => {}} size='large'
                  icon={<Icon name={'gallery'} size={22} />}
                />
              </View>
            </View>
            <View style={s.warning}>
              <Icon name={'warning'} size={20}/>
              <Text style={s.warningText}>{'Please note. You have to be verified again\nafter changing your personal info'}</Text>
            </View>
            <View style={[gs.buttons, s.buttons]}>
              <View style={{flex: 1, marginRight: 4}}>
                <Button title='Cancel' borderColor='#25233D' color='white' onPress={() => {}}/>
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

export default ProfileEditPhotoModal;