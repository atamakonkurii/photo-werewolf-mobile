import { StyleSheet, View } from "react-native";
import { HowToPlay } from "../component/HowToPlay";

import { InviteGame } from "./InviteGame";
import { Participant } from "./Participant";
import { WaitingRoomHeader } from "./WaitingRoomHeader";

export const WaitingRoom = ({ navigation }: any) => {
  return (
    <>
      <WaitingRoomHeader navigation={navigation} />

      <View style={styles.container}>
        <View style={styles.howToPlay}>
          <HowToPlay />
        </View>
        <InviteGame />
        <Participant navigation={navigation} />
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
});
