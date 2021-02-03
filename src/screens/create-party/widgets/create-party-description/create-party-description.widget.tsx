import React, { useState, FC } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Tags from 'react-native-tags';
import Icon from '../../../../components/icon/icon';
import { Colors } from '../../../../styles';
import s from './styles';

const CreatePartyDescriptionWidget: FC = () => {
  const [description, setDescription] = useState('');
  return (
    <View style={s.container}>
      <View style={s.between}>
        <Text style={s.title}>Describe your event</Text>
        <Text style={[s.deactive, { fontSize: 16 }]}>{4000 - description.length}</Text>
      </View>
      <TextInput
        placeholder={'Describe your event here. Make users curious invite them to be part of it.'}
        placeholderTextColor={Colors.$partyDeactive}
        style={[s.input, { height: 100 }]}
        multiline={true}
        onChangeText={(str) => {
          if (str.length > 4000) {
            return;
          }
          setDescription(str);
        }}
      />
      <View>
        <Text style={[s.title, { marginTop: 20 }]}>Add tags</Text>
        <Tags
          textInputProps={{
            placeholder: '#Add tag',
            placeholderTextColor: Colors.$partyDeactive,
          }}
          inputStyle={s.tagInput}
          inputContainerStyle={s.tagInput}
          renderTag={({ tag, index, deleteOnPress }) => (
            <TouchableOpacity
              style={s.tagContainer}
              key={`${tag}-${index}`}
              onPress={deleteOnPress}>
              <Text style={[s.tagInput, { marginRight: 8 }]}>#{tag}</Text>
              <Icon name={'close'} size={8} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default CreatePartyDescriptionWidget;
