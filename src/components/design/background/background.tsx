import React from 'react';
import { View } from 'react-native';
import s from './styles';

const Background: React.FC = (props: any) => {

    return (
        <View style={s.container}>
            { props.children }
        </View>
    );
}

export default Background;