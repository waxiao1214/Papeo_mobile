import React, { useState } from 'react';
import { Text, StatusBar, TouchableOpacity, View, ScrollView } from 'react-native';
import Icon from '../../components/icon/icon';
import { ProgressBar } from './components/progressBar/progressBar';
import { TopBar } from './components/topBar/topBar';
import { styles } from './styles';
import CreatePartyDescriptionWidget from './widgets/create-party-description.widget';
import CreatePartyNameWidget from './widgets/create-party-name.widget';

const CreatePartyPage: React.FC = () => {
    const [step, setStep] = useState(1);
    const renderWidget = () => {
        switch(step) {
            case 1: return <CreatePartyNameWidget />
            case 2: return <CreatePartyDescriptionWidget />
            default:
                return null;
        }
    }
    return (
        <>
            <StatusBar barStyle={"light-content"}/>
            <View style={styles.container}>
                <TopBar
                    onBack={() => {
                        if (step > 1) {
                            setStep(step - 1);
                        }
                    }}
                    onPress={() => {}}
                />
                <View style={styles.barContainer}>
                    <Text style={styles.title}>{`Step ${step}/11`}</Text>
                    <ProgressBar step={step}/>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                {
                    renderWidget()
                }
                </ScrollView>
                <TouchableOpacity style={styles.nextBtnWrapper} onPress={() => {
                    if (step < 11) {
                        setStep(step + 1);
                    }
                }}>
                    <Icon name={"arrow-right"} size={16}/>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default CreatePartyPage;