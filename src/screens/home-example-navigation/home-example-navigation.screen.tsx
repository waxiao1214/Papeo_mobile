import React, { FC } from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const HomeExampleNavigation: FC = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <Button title="Terms And Conditions Screen" onPress={() => navigation.replace('TermsConditionsScreen')} />
            <Button title="Login Screen" onPress={() => navigation.replace('LoginScreen')} />
            <Button title="CreatePartyScreen" onPress={() => navigation.replace('CreatePartyScreen')} />
        </View>
    );
};

export default HomeExampleNavigation;
