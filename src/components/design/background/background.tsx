import React from 'react';
import { View } from 'react-native';
import s from './styles';

const Background: React.FC = (props) => {

    return (
        <View style={s.container}>
            {props}
        </View>
    );
}

export default Background;