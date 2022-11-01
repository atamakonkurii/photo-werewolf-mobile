import { StyleSheet, View, Text } from "react-native";

import { Header } from "../../../../component/Header";
import { HowToPlay } from "../component/HowToPlay";
export const PhotoSelectRoom = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.howToPlay}>
          <HowToPlay />
        </View>
        <Text style={styles.mainText}>写真選択</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
    alignItems: "center",
  },
  howToPlay: {
    marginLeft: "auto",
    marginRight: 40,
    marginVertical: 10,
  },
  mainText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "900",
    marginBottom: 10,
  },
});
