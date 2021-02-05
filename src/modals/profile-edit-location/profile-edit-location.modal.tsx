import React, {useState} from 'react'
import { View, Image, Modal, Text, Animated } from 'react-native';
// import MapView from 'react-native-maps';
import ModalHeader from '../components/modal-header/modal-header';
import Button from '../../components/Button';
import Colors from '../../styles/colors/colors';
import Icon from '../../components/icon/icon';
import { useDispatch, useSelector } from 'react-redux';
import { hideProfileEditLocation } from '../../store/modals/profile-edit-location/profile-edit-location.actions';
import s from './styles';

const MAP = require('../../assets/img/map.png')

const ProfileEditLocationModal = () => {
  const dispatch = useDispatch();
  const [bgFadeAnimation] = useState(new Animated.Value(0));
  const profileEditLocationModal = useSelector((state:any) => state.profileEditLocationModal)
  console.log(profileEditLocationModal)
  if(!profileEditLocationModal.isVisible) {
    return null;
  }

  return (
    <Animated.View style={[s.animate, {opacity: bgFadeAnimation}]} >
      <Modal
        animationType='slide'
        transparent={true}
        visible={profileEditLocationModal.isVisible}
      >
        <View style={[s.centeredView]}>
          <View style={s.modalView}>
            <View style={{paddingLeft: 15, paddingRight: 15}}>
              <ModalHeader title='Change Address' onClose={() => dispatch(hideProfileEditLocation())}/>
              <Text style={[s.nameTitle, s.gray]}>Your Name</Text>
              <Text style={[s.name, s.white]}>Meissnerstr. 3, Köln, Germany </Text>
            </View>
            <View style={{width: '100%'}}>
              <Image source={MAP} style={s.mapview}/>
              {/* connect google map */}
              {/* <MapView
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              /> */}
            </View>
            <View style={s.buttons}>
              <View style={{flex:1, marginRight: 5}}>
                <Button title='Cancel' color='white' onPress={() => dispatch(hideProfileEditLocation())} borderColor='#25233D'/> 
              </View>
              <View style={{flex: 1, marginLeft: 5}}>
                <Button title='Save' bgColor={Colors.$primary} color='white' onPress={() => {}} /> 
              </View>           
            </View>
          </View>
        </View>
      </Modal>
    </Animated.View>
  )
}

export default ProfileEditLocationModal;
