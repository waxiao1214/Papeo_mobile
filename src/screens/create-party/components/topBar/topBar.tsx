import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from '../../../../components/icon/icon';
import { styles } from './styles';
import TopBarProps from './topBar.interface';

export const TopBar: React.FC<TopBarProps> = (props) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={props.onBack}>
          <Icon name={'arrow-left'} size={16} />
        </TouchableOpacity>
        <Text style={styles.title}>Create Party</Text>
        <TouchableOpacity style={styles.close} onPress={props.onClose}>
          <Icon name={'close'} size={14}/>
        </TouchableOpacity>
    </View>
  );
};
