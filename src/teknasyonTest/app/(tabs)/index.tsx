import { Button, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

import { Text, View } from "react-native";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          router.replace("/(tabs)/two");
        }}
      >
        <Text style={styles.title}>LandingLatestScreen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: 130,
    height: 30,
    borderRadius: 5,
    backgroundColor: "#017AFF",
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 13,

    color: "white",
  },
});
