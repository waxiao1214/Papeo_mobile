import React, {useState} from 'react';
import { View, Image, Modal, Text, Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { hideProfileEditPhoto } from '../../store/modals/profile-edit-photo/profile-edit-photo.actions';
import Colors from '../../styles/colors/colors';
import Button from '../../components/Button';
import Icon from '../../components/icon/icon';
import ModalHeader from '../components/modal-header/modal-header';
import s from './styles';
import gs from '../styles';

const USER = require('../../assets/img/user.png')

const ProfileEditPhotoModal = () => {
  const dispatch = useDispatch()
  const [bgFadeAnimation] = useState(new Animated.Value(0));
  const profileEditPhotoModal = useSelector((state:any) => state.profileEditPhotoModal)

  if(!profileEditPhotoModal.isVisible) {
    return null;
  }
  
  return (
    <Animated.View style={[gs.animate, { opacity: bgFadeAnimation} ]} >
      <Modal 
        animationType='slide' 
        transparent={true} 
        visible={profileEditPhotoModal.isVisible} 
      >
        <View style={[gs.centeredView]}>
          <View style={[gs.modalView]}>
            <ModalHeader title='Edit profile photo' onClose={() => dispatch(hideProfileEditPhoto())}/>
            <Image source={USER} style={s.image}/>
            <View style={[gs.buttons, s.buttons]}>
              <View style={{flex: 1, marginRight: 4}}>
                <Button 
                  title='Camera' borderColor='#585b64' color='white' size='large'
                  icon={<Icon name={'camera-front'} size={28} />}
                  onPress={() => {
                    launchCamera({ mediaType: 'photo' }, () => {});
                  }}
                />
              </View>
              <View style={{flex: 1, marginLeft: 4}}>
                <Button 
                  title='Gallery' borderColor='#585b64' color='white' size='large'
                  icon={<Icon name={'gallery'} size={22} />}
                  onPress={() => {
                    launchImageLibrary({ mediaType: 'photo' }, () => {});
                  }}
                />
              </View>
            </View>
            <View style={s.warning}>
              <Icon name={'warning'} size={20}/>
              <Text style={s.warningText}>{'Please note. You have to be verified again\nafter changing your personal info'}</Text>
            </View>
            <View style={[gs.buttons, s.buttons]}>
              <View style={{flex: 1, marginRight: 4}}>
                <Button title='Cancel' borderColor='#25233D' color='white' onPress={() => dispatch(hideProfileEditPhoto())}/>
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