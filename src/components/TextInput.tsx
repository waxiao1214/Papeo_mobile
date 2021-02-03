import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from '../styles/components/papeo-input.styles';

AntDesign.loadFont();

const PapeoTextInput = () => {
  const [value, setValue] = useState('');

  const onChangeText = (value) => {
    setValue(value);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        placeholderTextColor="#7f8189"
        onChangeText={(text: string) => onChangeText(text)}
        value={value}
        dataDetectorTypes="phoneNumber"
      />
      <View style={styles.icon}>
        <AntDesign
          name="mail"
          style={{
            fontSize: 22,
            color: '#7f8189',
            marginLeft: 4,
          }}
        />
      </View>
    </View>
  );
};

export default PapeoTextInput;
