import React from 'react';
import { Text, View } from 'react-native';
import Icon from '../../../../components/icon/icon';

export const TopBar: React.FC = () => {
  return (
    <View>
        <Icon name={'arrow-left'}  />
        <Text>Create Party</Text>
        <Icon name={'activity'} />
    </View>
  );
};
