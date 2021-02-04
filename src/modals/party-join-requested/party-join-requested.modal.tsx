import React, {useState} from 'react'
import { View, Image, Modal, Text, Animated, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';
import Colors from '../../styles/colors/colors';
import Icon from '../../components/icon/icon';
import s from './styles';

const IMAGE = require('../../assets/img/bg.png')
const PartyJoinRequested = () => {
  const [bgFadeAnimation] = useState(new Animated.Value(0));

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          backgroundColor: 'red',
          width: '100%',
          height: '100%',
          opacity: bgFadeAnimation
        }
      ]}
    >
      <Modal
        animationType='slide'
        transparent={true}
        visible={true}
      >
        <View style={[s.centeredView]}>
          <View style={s.modalView}>
            <View style={s.header}>
              <Text style={[s.heaterTitle, s.white]}>Join Party</Text>
              <TouchableOpacity onPress={() => {}}>
                <Icon name={'close'} size={14} />
              </TouchableOpacity>              
            </View>
            <Text style={[s.title, s.white]}>Your request to join</Text>
            <Image style ={s.image} source={IMAGE}/>
            <Text style={[s.subTitle, s.white]}>New Year Anti-COVID Party</Text>
            <Text style={[s.subText, s.white]}>has been successfully sent</Text>
            <Button 
              title='Close' 
              bgColor={Colors.$primary} 
              color='white'
              onPress={() => {}}
            />
          </View>
        </View>
      </Modal>
    </Animated.View>
  )
}

export default PartyJoinRequested;
