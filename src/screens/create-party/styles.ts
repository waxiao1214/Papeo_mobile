import { StyleSheet } from "react-native";
import { Colors } from "../../styles";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.$partyBackground,
    },
    barContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 24,
        paddingRight: 24,
        marginTop: 7,
    },
    title: {
        fontFamily: "SFProDisplay-Regular",
        fontSize: 14,
        color: 'white',
        marginRight: 18,
    },
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