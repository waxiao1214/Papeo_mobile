import { StyleSheet } from "react-native";
import { Colors } from "../../../styles";
export const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    between: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontFamily: "SFProDisplay-Regular",
        fontWeight: "700",
        fontSize: 18,
        color: "white",
        marginBottom: 20,
    },
    input: {
        fontFamily: "SFProDisplay-Regular",
        color: "white",
        fontSize: 14,
    },
    deactive: {
        fontFamily: "SFProDisplay-Regular",
        color: Colors.$partyDeactive,
    },
    tagContainer: {
        // backgroundColor: 'transparent',
    },
    tagInput: {
        fontFamily: "SFProDisplay-Regular",
        color: "white",
        fontSize: 16,
        backgroundColor: 'transparent',
    }
});