import { StyleSheet, Text, View, Pressable } from "react-native";

export const Participant = ({ navigation }: any) => {
  return (
    <>
      <View style={styles.square}>
        <View style={styles.innerSquare}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.mainText}>参加者</Text>
            <Text style={styles.explainText}>5人〜8人</Text>
          </View>

          <Text style={styles.explainText}>5人集まったらスタートできます</Text>
          <View style={{ marginVertical: 8 }}>
            <Text style={styles.participantText}>かずお</Text>
            <Text style={styles.participantText}>かずし</Text>
            <Text style={styles.participantText}>かずと</Text>
            <Text style={styles.participantText}>かずた</Text>
            <Text style={styles.participantText}>かずき</Text>
          </View>

          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("PhotoSelectRoom")}
          >
            <Text style={styles.buttonText}>スタート</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  square: {
    borderWidth: 1,
    borderRadius: 50,
    marginTop: 10,
    borderColor: "#F1A533",
    alignItems: "center",
    width: "80%",
    paddingVertical: 20,
  },
  innerSquare: {
    width: "70%",
    textAlign: "left",
  },
  mainText: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "900",
  },
  explainText: {
    color: "#8D97A4",
    fontSize: 12,
    fontWeight: "500",
    marginTop: "auto",
    marginHorizontal: 4,
  },
  participantText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginHorizontal: 4,
    marginVertical: 4,
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
