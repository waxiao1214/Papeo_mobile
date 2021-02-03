import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from '../../components/icon/icon';
import s from './styles';
import TopBarProps from './top-bar.interface';

const TopBar: React.FC<TopBarProps> = ({ onBack, onClose, step }) => {
  return (
    <View style={s.container}>
      <TouchableOpacity
        onPress={() => {
          if (step && step > 1 && onBack) {
            onBack(step - 1);
          }
        }}>
        <Icon name={'arrow-left'} size={16} />
      </TouchableOpacity>
      <View>
        <Text style={s.title}>Create Party</Text>
        {step && step > 4 && (
          <View style={s.badge}>
            <Icon name={'lock-off'} size={10} />
            <Icon name={'commercial'} size={10} />
          </View>
        )}
      </View>
      <TouchableOpacity
        style={s.close}
        onPress={() => {
          if (onClose) {
            onClose();
          }
        }}>
        <Icon name={'close'} size={14} />
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;
