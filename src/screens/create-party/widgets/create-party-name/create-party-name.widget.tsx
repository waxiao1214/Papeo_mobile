import React, { FC } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Colors } from '../../../../styles';
import s from '../create-party-description/styles';

const CreatePartyNameWidget: FC = () => {
  return (
    <View style={s.container}>
      <Text style={s.title}>Give your event a name</Text>
      <TextInput
        placeholder={'Type party event name'}
        placeholderTextColor={Colors.$partyDeactive}
        style={s.input}
      />
    </View>
  );
};

export default CreatePartyNameWidget;
