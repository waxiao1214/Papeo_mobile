import React from 'react';
import { TextInput, View, TouchableHighlight, Image, Text } from 'react-native';
import styles from '../styles/components/select-phone-number.style';
const FLAG = require('../assets/img/flag.png')

const SelectPhoneNumber = (props) => {
  const { onPress } = props;
  const [value, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeText(text)}
        value={value}
        placeholder="0000 0000 0000"
        dataDetectorTypes="phoneNumber"
      />
      <TouchableHighlight style={styles.country} onPress={onPress}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Image source={FLAG} style={{width: 24, height: 24}}/>
          {/* { have to set icon} */}
          <Text style={{paddingLeft: 8, color: 'white', marginTop: 4}}></Text>          
        </View>
      </TouchableHighlight>
    </View>
  );
}

export default SelectPhoneNumber;