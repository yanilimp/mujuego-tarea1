/* eslint-disable import/order */
/* eslint-disable import/namespace */
import { View } from "react-native";

import { Header } from "./components";
import { StartGame } from "./screens/start-game/index";
import { styles } from "./styles";

const App = () => {
  return (
    <View style={styles.container}>
      <Header title="Adivina el número" />
      <StartGame />
    </View>
  );
};
export default App;
