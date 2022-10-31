import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from "react-native";

type Props = {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  navigation: any;
};

export const CreateRoomModal = (props: Props) => {
  const [roomName, onChangeRoomName] = useState("");
  const { modalVisible, setModalVisible, navigation } = props;
  return (
    <>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>部屋名を入力してください</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeRoomName}
              value={roomName}
              placeholder="例)写真人狼部屋"
            />
            <View style={{ flexDirection: "row" }}>
              <Pressable
                style={[styles.closeButton, styles.closeButtonColor]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  onChangeRoomName("");
                }}
              >
                <Text style={styles.textStyle}>閉じる</Text>
              </Pressable>
              <Pressable
                style={[styles.determineButton, styles.determineButtonColor]}
                onPress={() => {
                  navigation.navigate("PhotoWereWolf", { roomName: roomName });
                  onChangeRoomName("");
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>決定</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#222831",
    borderRadius: 20,
    width: "80%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  determineButton: {
    borderRadius: 30,
    padding: 10,
    width: 100,
    marginHorizontal: 3,
  },
  determineButtonColor: {
    backgroundColor: "#F1A533",
  },
  closeButton: {
    borderRadius: 30,
    padding: 10,
    width: 100,
    marginHorizontal: 3,
  },
  closeButtonColor: {
    backgroundColor: "#908e8a",
  },
  textStyle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
    textAlign: "center",
  },
  modalText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "900",
    textAlign: "center",
  },
  input: {
    height: 60,
    width: "80%",
    fontSize: 22,
    fontWeight: "800",
    margin: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    backgroundColor: "#fff",
    textAlign: "center",
  },
});
