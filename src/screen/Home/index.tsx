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
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.mainText}>写真人狼</Text>
        <Image
          style={styles.logo}
          source={require("photo-werewolf/assets/img/character_hitsuji_ookami.webp")}
        />
        <Text style={styles.text}>コードを入力して部屋に入る</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeRoomId}
          value={roomId}
          placeholder="#部屋コード"
        />
        <Text style={styles.subText}>もしくは</Text>
        <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>部屋を作る</Text>
        </Pressable>
        <CreateRoomModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          navigation={navigation}
        />
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
    fontWeight: "900",
    marginBottom: 10,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
  },
  subText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 10,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  input: {
    height: 50,
    width: 150,
    fontSize: 18,
    fontWeight: "700",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: "#F1A533",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
  },
});
