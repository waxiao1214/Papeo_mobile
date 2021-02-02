import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from '../../components/icon/icon';
import { ProgressBar } from './components/progressBar/progressBar';
import { TopBar } from './components/topBar/topBar';

const CreatePartyPage: React.FC = () => {
    return (
        <View>
            <TopBar />
            <ProgressBar />
            <TouchableOpacity>
                <Icon name={"arrow-left"} />
            </TouchableOpacity>
        </View>
    );
}

export default CreatePartyPage;