import { StyleSheet } from "react-native";
import { Colors } from '../../../../styles';

export default StyleSheet.create({
    nextBtnWrapper: {
        position: 'absolute',
        right: 24,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.$partyActive,
        bottom: 41,
    }
});