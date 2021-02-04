import React, {useState} from 'react'
import { View, Image, Modal, Text, Animated } from 'react-native';
// import MapView from 'react-native-maps';
import Button from '../../components/Button';
import Colors from '../../styles/colors/colors';
import Icon from '../../components/icon/icon';
import s from './styles';

const MAP = require('../../assets/img/map.png')

const ProfileEditLocation = () => {
  const [bgFadeAnimation] = useState(new Animated.Value(0));

  return (
    <Animated.View style={[s.animate, {opacity: bgFadeAnimation}]} >
      <Modal
        animationType='slide'
        transparent={true}
        visible={true}
      >
        <View style={[s.centeredView]}>
          <View style={s.modalView}>
            <View style={s.header}>
              <Text style={[s.heaterTitle, s.white]}>Change Address</Text>
              <Icon name={'close'} size={14} />
            </View>
            <Text style={[s.nameTitle, s.gray]}>Your Name</Text>
            <Text style={[s.name, s.white]}>Meissnerstr. 3, Köln, Germany </Text>
            <View>
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
                <Button title='Cancel' color='white' onPress={() => {}} borderColor='#25233D'/> 
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

export default ProfileEditLocation;
