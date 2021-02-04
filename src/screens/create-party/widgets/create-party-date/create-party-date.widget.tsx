import React, { FC, useState } from 'react';
import { Text, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import s from '../create-party-description/styles';

const CreatePartyDateWidget: FC = () => {
  const [date, setDate] = useState(new Date());
  return (
    <View style={s.container}>
      <Text style={s.title}>Set the date of your event</Text>
      <DatePicker date={date} onDateChange={setDate} textColor={'white'} />
    </View>
  );
};

export default CreatePartyDateWidget;
