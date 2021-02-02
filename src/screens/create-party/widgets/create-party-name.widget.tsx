import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { Colors } from '../../../styles';
import { styles } from './styles';

const CreatePartyNameWidget: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Give your event a name</Text>
            <TextInput
                placeholder={"Type party event name"}
                placeholderTextColor={Colors.$partyDeactive}
                style={styles.input}
            />
        </View>
    );
}

export default CreatePartyNameWidget;