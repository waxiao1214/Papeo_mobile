import React, { useState } from 'react';
import { Alert, StatusBar, TouchableOpacity, View } from 'react-native';
import Icon from '../../components/icon/icon';
import { ProgressBar } from './components/progressBar/progressBar';
import { TopBar } from './components/topBar/topBar';
import { styles } from './styles';

const CreatePartyPage: React.FC = () => {
    const [step, setStep] = useState(1);
    return (
        <>
            <StatusBar barStyle={"light-content"}/>
            <View style={styles.container}>
                <TopBar
                    onBack={() => {}}
                    onPress={() => {}}
                />
                <ProgressBar step={step}/>
                <TouchableOpacity>
                    <Icon name={"arrow-left"} />
                </TouchableOpacity>
            </View>
        </>
    );
}

export default CreatePartyPage;