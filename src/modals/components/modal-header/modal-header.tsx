import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import ModalHeaderProps from './modal-header.interface';
import Icon from '../../../components/icon/icon';
import s from './styles';

const Header: React.FC<ModalHeaderProps> = ({title, onReturn, onClose}) => {
  return (
    <View style={s.header}>
      <Text style={[s.heaterTitle, s.white]}>{title}</Text>
      <TouchableOpacity onPress={() => onClose() }>
        <Icon name={'close'} size={14} />
      </TouchableOpacity>              
    </View>
  )
}

export default Header;
