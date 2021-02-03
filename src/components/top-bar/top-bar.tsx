import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from '../../components/icon/icon';
import s from './styles';
import TopBarProps from './top-bar.interface';

// return interface TO DO

const TopBar: React.FC<TopBarProps> = ({ onBack, onClose }): any => {
  return (
    <View style={s.container}>
      <TouchableOpacity onPress={onBack}>
        <Icon name={'arrow-left'} size={16} />
      </TouchableOpacity>
      <Text style={s.title}>Create Party</Text>
      <TouchableOpacity style={s.close} onPress={onClose}>
        <Icon name={'close'} size={14} />
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;
