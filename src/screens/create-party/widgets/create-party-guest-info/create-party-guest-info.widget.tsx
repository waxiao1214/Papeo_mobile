import React, { useState, FC } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Colors } from '../../../../styles';
import s from './styles';

const CreatePartyGuestInfoWidget: FC = () => {
  const [info, setInfo] = useState('');
  return (
    <View style={s.container}>
      <View style={s.between}>
        <Text style={s.title}>Information for accepted guests</Text>
        <Text style={[s.deactive, { fontSize: 16 }]}>{4000 - info.length}</Text>
      </View>
      <TextInput
        placeholder={
          'Write a chat message here that will be automatically sent to new guests on the guest list.\n\nLeave this field empty if you do not want to chat with your guests.'
        }
        placeholderTextColor={Colors.$partyDeactive}
        style={[s.input, { height: 100 }]}
        multiline={true}
        onChangeText={(str) => {
          if (str.length > 4000) {
            return;
          }
          setInfo(str);
        }}
      />
    </View>
  );
};

export default CreatePartyGuestInfoWidget;
