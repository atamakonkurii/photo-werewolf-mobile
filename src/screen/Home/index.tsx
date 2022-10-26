import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";

export const HomeScreen = ({ navigation }: any) => {
  const [text, onChangeText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>写真人狼</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <Text style={styles.subText}>コードを入力して部屋に入る</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="部屋コードを入力してください"
      />
      <Text style={styles.subText}>もしくは</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("PhotoWereWolf")}
      >
        <Text style={styles.subText}>部屋を作る</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
    alignItems: "center",
    justifyContent: "center",
  },
  mainText: {
    color: "#FFFFFF",
    fontSize: 60,
    fontWeight: "bold",
  },
  subText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "orange",
  },
});
