/* eslint-disable prettier/prettier */
/* eslint-disable import/namespace */
/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";

export const styles= StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        marginTop: 20,
    },
    title : {
        fontSize: 18,
        color: "#212121",
        textAlign: "center",
        paddingVertical: 10,
    },
    inputContainer : {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
    },
    label : {
        fontSize: 20,
        paddingVertical: 5,
        color: '#212121',
        textAlign: 'center',
    },
    input : {
        fontSize: 20,
        borderBottomColor: '#22577a',
        borderBottomWidth: 1,
        width: '100%',
        minWidth: 70,
        textAlign: 'center',
        paddingVertical: 5,

    },
    buttonContainer : {
        flexDirection: 'row',
        width: '75%',
        justifyContent: 'space-around',
        marginTop: 20,
        marginLeft: 30,
    },
});