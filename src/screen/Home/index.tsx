import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { Header } from "../../component/Header";
import { CreateRoomModal } from "./component/CreateRoomModal";

export const HomeScreen = ({ navigation }: any) => {
  const [roomId, onChangeRoomId] = useState("");

  return (
    <>
      <Header />
      <CreateRoomModal />
      <View style={styles.container}>
        <Text style={styles.mainText}>写真人狼</Text>
        <Image
          style={styles.logo}
          source={require("../../../assets/img/character_hitsuji_ookami.webp")}
        />
        <Text style={styles.subText}>コードを入力して部屋に入る</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeRoomId}
          value={roomId}
          placeholder="部屋コードを入力してください"
        />
        <Text style={styles.subText}>もしくは</Text>
        <Pressable
          style={styles.button}
          onPress={() =>
            navigation.navigate("PhotoWereWolf", { roomId: roomId })
          }
        >
          <Text style={styles.subText}>部屋を作る</Text>
        </Pressable>
      </View>
    </>
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
  logo: {
    width: 80,
    height: 80,
  },
  input: {
    height: 40,
    width: 240,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
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
