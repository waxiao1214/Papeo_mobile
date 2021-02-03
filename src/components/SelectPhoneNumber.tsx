import React from 'react';
import { TextInput, View, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/components/select-phone-number.style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

MaterialIcons.loadFont();

const FLAG = require('../assets/img/flag.png');

const SelectPhoneNumber = (props) => {
  const { onPress } = props;
  const [value, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="0000 0000 0000"
        placeholderTextColor="#7f8189"
        onChangeText={(text) => onChangeText(text)}
        value={value}
        dataDetectorTypes="phoneNumber"
      />
      {/* { have to set icon} */}
      <View style={styles.country}>
        <TouchableOpacity onPress={() => onPress()}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Image source={FLAG} style={{ width: 24, height: 24 }} />
            <MaterialIcons
              name="keyboard-arrow-down"
              style={{
                fontSize: 24,
                color: 'white',
                marginLeft: 4,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectPhoneNumber;
