import { StackActions } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

export const WaitingRoomHeader = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.dispatch(StackActions.popToTop())}>
        <Text style={styles.exitButton}>部屋を出る</Text>
      </Pressable>
      <Image
        style={styles.userImage}
        source={require("photo-werewolf/assets/img/character_hitsuji_ookami.webp")}
      />
      <Text style={styles.userNameText}>かずお</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222831",
    flexDirection: "row",
    paddingTop: 10,
  },
  exitButton: {
    color: "#8D97A4",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: 40,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginLeft: "auto",
    marginRight: 10,
    marginTop: "auto",
    marginBottom: "auto",
    backgroundColor: "#ff34",
  },
  userNameText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: "auto",
    marginBottom: "auto",
    marginRight: 20,
  },
});
