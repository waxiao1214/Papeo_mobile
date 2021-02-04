import React, { useState, FC } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Slider } from 'react-native-elements';
import Icon from '../../../../components/icon/icon';
import { Colors } from '../../../../styles';
import s from './styles';

const CreatePartyGuestLimitWidget: FC = () => {
  const [count, setCount] = useState(0);
  const renderGuests = () => {
    const guests = [];
    for (let i = 0; i < count; i++) {
      guests.push(
        <View style={s.item} key={i}>
          <Icon name={'guy'} size={33} color={Colors.$partyActive} />
        </View>,
      );
    }
    return guests;
  };
  return (
    <View style={s.container}>
      <Text style={s.title}>How many people can join Your event?</Text>
      <TextInput
        placeholder={'0'}
        placeholderTextColor={Colors.$partyDeactive}
        style={s.input}
        value={`${count}`}
      />
      <View style={s.guests}>{renderGuests()}</View>
      <Slider
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={count}
        maximumTrackTintColor={Colors.$partyDeactive}
        minimumTrackTintColor={Colors.$partyActive}
        onValueChange={setCount}
        thumbStyle={s.thumb}
        trackStyle={s.track}
      />
    </View>
  );
};

export default CreatePartyGuestLimitWidget;
