import React, { FC } from 'react';
import { Text, View } from 'react-native';
import TermListItemProps from './term-list-item.interface';
import s from './styles'


const TermListItem: FC<TermListItemProps> = ({ id, text }) => {

    return (
        <View style={s.item}>
            <Text style={{...s.bold, ...s.white, lineHeight: 17}}>{id}</Text>
            <View style={{paddingLeft: 20, paddingRight: 44}}>
            <Text style={{...s.white, lineHeight: 17 }}>{text}</Text>
            </View>
        </View>
    )
}

export default TermListItem;