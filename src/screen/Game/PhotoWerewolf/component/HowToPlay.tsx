import { StyleSheet, Text, View, Pressable, Linking } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { library, IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
library.add(faQuestion as IconDefinition);

export const HowToPlay = () => {
  return (
    <>
      <View style={styles.container}>
        <Pressable
          onPress={() => {
            Linking.openURL(
              "https://nic-english.com/phrase/i-dont-know-how-to-play/"
            );
          }}
        >
          <FontAwesomeIcon
            style={styles.fontAwesome}
            size={32}
            icon={faQuestion}
          />
          <Text style={styles.mainText}>遊び方</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222831",
  },
  fontAwesome: {
    color: "#8D97A4",
  },
  mainText: {
    color: "#8D97A4",
    fontSize: 12,
    fontWeight: "500",
  },
});
