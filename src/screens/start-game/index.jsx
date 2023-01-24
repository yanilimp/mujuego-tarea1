/* eslint-disable prettier/prettier */
/* eslint-disable import/namespace */
/* eslint-disable prettier/prettier */
import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles.js";

export const StartGame = () => {
    return(
        <View style={styles.container}>
            <Text> Start Game </Text>
        </View>
    )
}

export default StartGame;