import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FreeTrialSwitch } from "./freeTrialSwitch/freeTrialSwitch";
// todo Make isEnabled take from parent component
export const FreeTrial = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  return (
    <View style={[styles.container, isEnabled ? styles.containerIsEnabled : null]}>
      <View style={styles.leftSide}>
        <Text adjustsFontSizeToFit={true} style={styles.text}>
          not sure yet?
        </Text>
        <Text adjustsFontSizeToFit={true} style={styles.title}>
          Enable Free Trial
        </Text>
      </View>
      <View style={styles.rightSide}>
        <FreeTrialSwitch
          isEnabled={isEnabled}
          onChange={(isEnabled) => {
            setIsEnabled(isEnabled);
          }}
        ></FreeTrialSwitch>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    borderRadius: 8,
    paddingHorizontal: 20,
    flexDirection: "row",

    backgroundColor: "white",
    borderColor: "rgba(114, 115, 121, 0.2)",
    borderWidth: 1,
  },
  containerIsEnabled: {
    backgroundColor: "rgba(255, 0, 0, 0.05)",
    borderColor: "rgba(255, 0, 0, 1)",
    borderWidth: 2,
  },
  leftSide: {
    width: "50%",
    justifyContent: "center",
    paddingBottom: 15,
  },
  text: {
    color: "rgba(114, 115, 121, 1)",
    fontSize: 14,
    fontFamily: "youtubeSans",
    textAlignVertical: "top",
    textAlign: "left",
    marginTop: 10,
    alignItems: "baseline",
  },
  title: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "left",
    fontFamily: "youtubeSansBold",
    textAlignVertical: "top",
  },

  seperator: {
    height: 1,
    width: "100%",
    backgroundColor: "rgba(114, 115, 121, 0.2)",
    marginVertical: 15,
  },
  marginBottom: {
    marginBottom: 20,
  },
  rightSide: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
