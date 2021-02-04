import React, { FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView from 'react-native-maps';
import Icon from '../../../../components/icon/icon';
import { Colors } from '../../../../styles';
import s from './styles';

const CreatePartyLocationWidget: FC = () => {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <View style={s.container}>
      <View style={s.autoWrapper}>
        <Text style={s.title}>Party Venue</Text>
        <GooglePlacesAutocomplete
          placeholder={'Search Venue'}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyBDnVlb3uoyjZcTpXH1ZBLAaRQionWspLO',
            language: 'en',
          }}
          styles={{
            container: s.inputContainer,
            textInput: [s.input, { borderColor: focus ? 'white' : Colors.$partyDeactive }],
          }}
          textInputProps={{
            placeholderTextColor: Colors.$partyDeactive,
            onFocus: () => {
              setFocus(true);
            },
            onBlur: () => {
              setFocus(false);
            },
          }}
        />
      </View>
      <View style={s.mapView}>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <TouchableOpacity style={s.location}>
          <Icon name={'location-me'} size={22} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreatePartyLocationWidget;
