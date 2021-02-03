import React, { useState, useEffect } from 'react';
import {
  Text,
  Modal,
  View,
  SafeAreaView,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from '../../styles/components/select-country-modal.style';
import { countryData } from '../../constant/login/data';
import AntDesign from 'react-native-vector-icons/AntDesign';
AntDesign.loadFont();
interface CountryModalProps {
  open: boolean;
  onClose: Function;
}

const SelectCountryModal = (props: CountryModalProps) => {
  const { open, onClose } = props;
  const [searchString, setSearchString] = useState('');
  const [filteredContry, setFilterCountry] = useState(countryData);

  const onPressItem = (country: string) => {
    onClose();
    setSearchString(country);
  };
  const renderItem = ({ item }: any) => (
    <TouchableOpacity onPress={(e) => onPressItem(item.countryName)}>
      <View style={styles.countryList}>
        <View style={styles.left}>
          <View></View>
          <Text style={{ color: 'white' }}>{item.countryName}</Text>
        </View>
        <View style={styles.phoneCode}>
          <Text style={{ color: 'white' }}>{item.phoneCode}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  useEffect(() => {
    if (searchString) {
      const newArray = countryData.filter((data) => !data.countryName.indexOf(searchString));
      return setFilterCountry(newArray);
    }
    return setFilterCountry(countryData);
  }, [searchString]);

  return (
    <Modal visible={open} transparent={true}>
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.body}>
            <View style={styles.header}>
              <Text style={styles.title}>Select a country</Text>
              {/* have to change to icon */}
              <TouchableOpacity onPress={() => onClose()}>
                <AntDesign
                  name="close"
                  style={{
                    fontSize: 24,
                    color: 'white',
                  }}
                />
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.searchInput}
              onChangeText={(text) => setSearchString(text)}
              value={searchString}
              placeholder="Search country here..."
              placeholderTextColor="#7f8189"
            />
            <FlatList
              data={filteredContry}
              renderItem={renderItem}
              keyExtractor={(item) => item.countryName}
            />
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};

export default SelectCountryModal;
