import React, {useState} from 'react'
import { View, Image, Modal, Text, Animated, TouchableOpacity } from 'react-native';
import Icon from '../../components/icon/icon';
import Button from '../../components/Button';
import Colors from '../../styles/colors/colors';
import ModalHeader from '../components/modal-header/modal-header'
import s from './styles';

const ProfileEditBasicInfo = () => {
  const [bgFadeAnimation] = useState(new Animated.Value(0));

  return (
    <Animated.View style={[s.animate, { opacity: bgFadeAnimation} ]} >
      <Modal animationType='slide' transparent={true} visible={true} >
        <View style={[s.centeredView]}>
          <View style={s.modalView}>
            <ModalHeader title='Edit Basic info' onClose={() => {}}/>
            <Text style={[s.title, s.gray]}>Your Name</Text>
            <Text style={[s.subTitle, s.white]}>Brooklyn Simmons</Text>
            <Text style={[s.genderTitle, s.gray]}>Your Gender</Text>
            <View style={s.genderView}>
              <View style={{flex:1, marginRight: 8}}>
                <Button title='Male' size='small' borderColor='#585b64' color='white' 
                  icon={<Icon name={'male-on'} size={16} />}/>
              </View>
              <View style={{flex:1, marginLeft: 4, marginRight: 4}}>
                <Button  title='Female' size='small' borderColor='#585b64'  color='#585b64'
                  icon={<Icon name={'female-off'} size={16} color={'#00ff00'}/>} />
              </View>
              <View style={{flex:1, marginLeft: 8}}>
                <Button  title='Other' size='small' borderColor='#585b64'  color='#585b64'
                  icon={<Icon name={'gender-other-off'} size={16} />} />
              </View>
            </View>
            <View style={{marginTop: 30}}>
              <Text style={[s.subText, s.gray]}>{'Please not. You have to be verified again after changing your personal info'}</Text>
            </View>
            <View style={s.buttons}>
              <View style={{flex:1}}>
                <Button title='Cancel' borderColor={'#25233D'} color='white' onPress={() => {}} />
              </View>
              <View style={{flex:1}}>
                <Button title='Save' bgColor={Colors.$primary} color='white' onPress={() => {}} />
              </View>
              
            </View>
          </View>
        </View>
      </Modal>
    </Animated.View>
  )
}

export default ProfileEditBasicInfo;
