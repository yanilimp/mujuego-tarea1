/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
/* eslint-disable import/namespace */
/* eslint-disable prettier/prettier */
import React, {useState} from "react";
import { View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import { Card } from "../../components/index.js";
import { colors } from "../../constants/index.js";

import { styles } from "./styles.js";

export const StartGame = () => {
    const [enteredValue, setEnteredValue] = useState("");
    const [confirmed, setConfirmed] = useState(false);

    const onHandlerChange = (text) => {
        setEnteredValue(text.replace(/[^0-9]/g, ""));
    }

    const onHandleReset = () => {
        setEnteredValue("");
        setConfirmed(false);
    }
    const onHandleConfirm = () => {
        const chosenNumber = parseInt(enteredValue, 10);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Número inválido', 'El número tiene que estar entre en 1 y 99', [{text: 'Entendido', style: 'destructive', onPress: onHandleReset}])
        }
    };


    return(
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>

       
        <View style={styles.container}>
            <Text style={styles.title}> Start Game </Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.label}>Escribe un número</Text>
                <TextInput 
                value={enteredValue}
                keyboardType="numeric" 
                style={styles.input} 
                placeholder="0" 
                onChangeText={onHandlerChange} 
                
                />
                <View style={styles.buttonContainer}>
                <Button
                    title="Reiniciar"
                    onPress={onHandleReset}
                    color={colors.primary}
                />
                <Button
                    title="Confirmar"
                    onPress={onHandleConfirm}
                    color={colors.secondary}
                />
                </View>
            </Card>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGame;