import React from 'react';
import { TextInput, View, Button } from 'react-native';
import styles from '../styles/components/select-phone-number.style';
const SelectPhoneNumber = (props) => {
  const { onPress } = props;
  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeText(text)}
        value={value}
        dataDetectorTypes="phoneNumber"
      />
      <View style={styles.country}>
        <Button onPress={onPress} title=''/>
      </View>
    </View>
  );
}

export default SelectPhoneNumber;