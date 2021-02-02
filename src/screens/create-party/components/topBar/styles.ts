import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const styles = StyleSheet.create({
    container: {
        height: 100 - getStatusBarHeight(),
        flexDirection: 'row',
        paddingLeft: 24,
        paddingRight: 24,
        marginTop: getStatusBarHeight(),
        alignItems: 'center',
    },
    title: {
        fontFamily: "SFProDisplay-Bold",
        fontSize: 24,
        color: 'white',
        marginLeft: 16,
    },
    close: {
        marginLeft: 'auto',
    }
});