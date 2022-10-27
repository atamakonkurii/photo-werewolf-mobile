import { StyleSheet, Text, View, Image } from "react-native";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.userImage}
        source={require("../../assets/img/character_hitsuji_ookami.webp")}
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
