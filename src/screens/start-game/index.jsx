/* eslint-disable prettier/prettier */
/* eslint-disable import/namespace */
/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text, TextInput, Button } from "react-native";

import { styles } from "./styles.js";

export const StartGame = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}> Start Game </Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Escribe un número</Text>
                <TextInput style={styles.input} placeholder="0" />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Reiniciar"
                    onPress={()=>null}
                    color='#22577a'
                />
                <Button
                    title="Confirmar"
                    onPress={()=>null}
                    color='#80ed99'
                />
            </View>
        </View>
    )
}

export default StartGame;