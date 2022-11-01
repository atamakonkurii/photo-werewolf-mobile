import { StyleSheet, View } from "react-native";

import { InviteGame } from "./InviteGame";
import { Participant } from "./Participant";
import { WaitingRoomHeader } from "./WaitingRoomHeader";

export const WaitingRoom = ({ navigation }: any) => {
  return (
    <>
      <WaitingRoomHeader navigation={navigation} />
      <View style={styles.container}>
        <InviteGame />
        <Participant />
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
});
