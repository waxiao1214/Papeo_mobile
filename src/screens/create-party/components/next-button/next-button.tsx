import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from '../../../../components/icon/icon';
import NextButtonProps from './next-button.interface';
import s from './styles';

const NextButton: React.FC<NextButtonProps> = ({ step }) => {

    const setStep = (nextStep: number) => {
        // action nextStep
    }

    return (
        <TouchableOpacity style={s.nextBtnWrapper} onPress={() => {
            if (step < 11) {
                setStep(step + 1);
            }
        }}>
            <Icon name={"arrow-right"} size={16}/>
        </TouchableOpacity>
    );
};

export default NextButton
