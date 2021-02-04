import React, { FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from '../../../../components/icon/icon';
import { Colors } from '../../../../styles';
import s from './styles';

const CreatePartyPrivacyWidget: FC = () => {
  const [isPrivate, setIsPrivate] = useState<boolean>(true);
  return (
    <View style={s.container}>
      <Text style={s.title}>Choose privacy level</Text>
      <TouchableOpacity
        style={[s.item, { borderColor: isPrivate ? Colors.$partyActive : Colors.$partyDeactive }]}
        onPress={() => {
          setIsPrivate(true);
        }}>
        <View style={s.itemTitleWrapper}>
          <Icon name={'lock-on'} size={16} color={isPrivate ? 'white' : Colors.$partyDeactive} />
          <Text style={[s.itemTitle, { color: isPrivate ? 'white' : Colors.$partyDeactive }]}>
            Closed
          </Text>
        </View>
        <Text style={[s.itemDescription, { color: isPrivate ? 'white' : Colors.$partyDeactive }]}>
          A closed party is an event in which only confirmed persons can participate. Every user can
          request participation, but must be confirmed by you. The event location will only be
          displayed for your guest after the registration has been confirmed.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[s.item, { borderColor: !isPrivate ? Colors.$partyActive : Colors.$partyDeactive }]}
        onPress={() => {
          setIsPrivate(false);
        }}>
        <View style={s.itemTitleWrapper}>
          <Icon name={'lock-off'} size={16} color={!isPrivate ? 'white' : Colors.$partyDeactive} />
          <Text style={[s.itemTitle, { color: !isPrivate ? 'white' : Colors.$partyDeactive }]}>
            Open
          </Text>
        </View>
        <Text style={[s.itemDescription, { color: !isPrivate ? 'white' : Colors.$partyDeactive }]}>
          An open party is an event where anyone can register. The venue will bepublishedand can be
          viewed by every user.
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreatePartyPrivacyWidget;
