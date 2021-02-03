import React from 'react';
import { TextInput, View, Button, TouchableOpacity } from 'react-native';
import styles from '../styles/components/select-phone-number.style';

const SelectPhoneNumber = (props) => {
  const { onPress } = props;
  const [value, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='0000 0000 0000'
        placeholderTextColor='#7f8189'
        onChangeText={text => onChangeText(text)}
        value={value}
        dataDetectorTypes="phoneNumber"
      />
        <View style={styles.country}>
          <TouchableOpacity onPress={() => onPress()}>
            <View style={{width: '100%', height: '100%'}}></View>
          </TouchableOpacity>
        </View>
    </View>

  );
}

export default SelectPhoneNumber;