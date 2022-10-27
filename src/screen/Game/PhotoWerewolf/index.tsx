import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export const PhotoWerewolfScreen = ({ route, navigation }: any) => {
  console.log(route);
  return (
    <View style={styles.container}>
      <Text>{route.params.roomId}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <StatusBar style="auto" />
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
});
