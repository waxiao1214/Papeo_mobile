import { StyleSheet } from "react-native";
import { Colors } from "../../../../styles";
export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        height: 10,
        flex: 1,
        borderColor: Colors.$partyDeactive,
        padding: 2,
    },
    bar: {
        backgroundColor: 'red',
        borderRadius: 10,
        height: 6,
        width: '9.090909090909092%'
    },
});