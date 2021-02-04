import React, { FC, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from '../../../../components/icon/icon';
import { Colors } from '../../../../styles';
import s from './styles';

const CreatePartyPaymentsWidget: FC = () => {
  const [isFree, setIsFree] = useState<boolean>(true);
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <View style={s.container}>
      <Text style={s.title}>Is there an entrance fee?</Text>
      <TouchableOpacity
        style={[s.item, { borderColor: isFree ? Colors.$partyActive : Colors.$partyDeactive }]}
        onPress={() => {
          setIsFree(true);
          setFocus(false);
        }}>
        <View style={s.itemTitleWrapper}>
          <Icon name={'free'} size={16} color={isFree ? 'white' : Colors.$partyDeactive} />
          <Text style={[s.itemTitle, { color: isFree ? 'white' : Colors.$partyDeactive }]}>
            {isFree ? 'No, it is free.' : 'Free'}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[s.item, { borderColor: !isFree ? Colors.$partyActive : Colors.$partyDeactive }]}
        onPress={() => {
          setIsFree(false);
        }}>
        <View style={s.itemTitleWrapper}>
          <Icon name={'commercial'} size={16} color={!isFree ? 'white' : Colors.$partyDeactive} />
          <Text style={[s.itemTitle, { color: !isFree ? 'white' : Colors.$partyDeactive }]}>
            Entrance Fee
          </Text>
        </View>
        <TextInput
          placeholder={'Entrance fee'}
          placeholderTextColor={Colors.$partyDeactive}
          onFocus={() => {
            setFocus(true);
            setIsFree(false);
          }}
          style={[s.input, { borderColor: focus ? 'white' : Colors.$partyDeactive }]}
        />
        <Text style={[s.itemDescription, { color: !isFree ? 'white' : Colors.$partyDeactive }]}>
          Please note that private parties may only charge admission to cover costs. Higher entry
          fees violate Papeo&lsquo;s GTC and may lead to blocking for event creation.
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreatePartyPaymentsWidget;
