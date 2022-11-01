import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { Header } from "../../../../component/Header";
import { CreateRoomModal } from "../../../Home/component/CreateRoomModal";
import Clipboard from "@react-native-clipboard/clipboard";

export const WaitingRoom = ({ navigation }: any) => {
  const [roomId, onChangeRoomId] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const testNumber = 50001;

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.square}>
          <Text style={styles.roomNameText}>写真人狼部屋</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.text}>部屋コード</Text>
            <Text style={styles.text}>Twitter</Text>
            <Text style={styles.text}>LINE</Text>
          </View>
          <Pressable
            style={styles.clipboard}
            onPress={() => {
              // Clipboard.setString(String(testNumber));
              alert("クリップボードにコピーしました");
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.clipboardSharpText}>#</Text>
              <Text style={styles.clipboardText}>{`${testNumber}`}</Text>
            </View>
          </Pressable>
        </View>
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
  square: {
    borderWidth: 2,
    borderRadius: 50,
    marginTop: 100,
    borderColor: "#F1A533",
    alignItems: "center",
    width: "80%",
    paddingVertical: 20,
  },
  roomNameText: {
    color: "#FFFFFF",
    fontSize: 36,
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
  clipboard: {
    height: 50,
    width: 150,
    fontWeight: "700",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
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
  clipboardSharpText: {
    color: "#6B7280",
    fontSize: 24,
    fontWeight: "800",
    marginRight: 5,
  },
  clipboardText: {
    color: "#000",
    fontSize: 24,
    fontWeight: "800",
  },
});
