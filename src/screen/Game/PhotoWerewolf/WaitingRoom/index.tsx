import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Linking,
} from "react-native";
import { Header } from "../../../../component/Header";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { library, IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faLine, faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
library.add(faLine as IconDefinition);
library.add(faSquareTwitter as IconDefinition);
import Clipboard from "@react-native-clipboard/clipboard";

export const WaitingRoom = ({ navigation }: any) => {
  const testNumber = 50001;

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.square}>
          <Text style={styles.roomNameText}>写真人狼部屋</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.text}>部屋コード</Text>
            <Pressable
              onPress={() => {
                Linking.openURL("https://twitter.com/atamakonkurii");
              }}
            >
              <FontAwesomeIcon
                style={styles.fontAwesome}
                size={40}
                icon={faSquareTwitter}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                Linking.openURL("https://line.me/ja/");
              }}
            >
              <FontAwesomeIcon
                style={styles.fontAwesome}
                size={40}
                icon={faLine}
              />
            </Pressable>
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
    marginTop: "auto",
    marginHorizontal: 10,
  },
  fontAwesome: {
    color: "#8D97A4",
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
