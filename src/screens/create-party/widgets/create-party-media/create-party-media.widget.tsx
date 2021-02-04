import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Icon from '../../../../components/icon/icon';
import s from './styles';

const CreatePartyMediaWidget: FC = () => {
  return (
    <View style={s.container}>
      <Text style={s.title}>Party Video/Image</Text>
      <View style={s.between}>
        <TouchableOpacity
          style={s.item}
          onPress={() => {
            launchCamera({ mediaType: 'photo' }, () => {});
          }}>
          <View style={s.itemDetail}>
            <Icon name={'camera'} />
            <Text style={s.itemText}>Camera</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={s.item}
          onPress={() => {
            launchImageLibrary({ mediaType: 'photo' }, () => {});
          }}>
          <View style={s.itemDetail}>
            <Icon name={'upload'} />
            <Text style={s.itemText}>Upload from device</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={s.medias}>
        <Text style={s.mediaText}>Uploaded Images / Videos</Text>
        <View></View>
      </View>
      <TouchableOpacity style={s.preview}>
        <Text style={s.previewText}>Preview</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreatePartyMediaWidget;
