import React, { FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from '../../../../components/icon/icon';
import { Colors } from '../../../../styles';
import s from './styles';

const CreatePartyTypeWidget: FC = () => {
  const [isPrivate, setIsPrivate] = useState<boolean>(true);
  return (
    <View style={s.container}>
      <Text style={s.title}>Choose party type</Text>
      <TouchableOpacity
        style={[s.item, { borderColor: isPrivate ? Colors.$partyActive : Colors.$partyDeactive }]}
        onPress={() => {
          setIsPrivate(true);
        }}>
        <View style={s.itemTitleWrapper}>
          <Icon name={'private'} size={18} color={isPrivate ? 'white' : Colors.$partyDeactive} />
          <Text style={[s.itemTitle, { color: isPrivate ? 'white' : Colors.$partyDeactive }]}>
            Private
          </Text>
        </View>
        <Text style={[s.itemDescription, { color: isPrivate ? 'white' : Colors.$partyDeactive }]}>
          Create a private party at your home, in your student apartment, on your yacht, in your
          villa or in public places etc. Admission is free of charge or only to cover costs.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[s.item, { borderColor: !isPrivate ? Colors.$partyActive : Colors.$partyDeactive }]}
        onPress={() => {
          setIsPrivate(false);
        }}>
        <View style={s.itemTitleWrapper}>
          <Icon
            name={'commercial'}
            size={16}
            color={!isPrivate ? 'white' : Colors.$partyDeactive}
          />
          <Text style={[s.itemTitle, { color: !isPrivate ? 'white' : Colors.$partyDeactive }]}>
            Commercial
          </Text>
        </View>
        <Text style={[s.itemDescription, { color: !isPrivate ? 'white' : Colors.$partyDeactive }]}>
          Create a commercial party. These parties are for profit or other commercialpurposes, such
          as fundraising galas or product placements.
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreatePartyTypeWidget;
