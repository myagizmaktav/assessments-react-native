import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

type FreeTrialSwitchProps = {
  isEnabled: boolean;
  onChange: (isEnabled: boolean) => void;
};

export const FreeTrialSwitch = (props: FreeTrialSwitchProps) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          props.onChange(!props.isEnabled);
        }}
      >
        <View style={[styles.line, props.isEnabled ? styles.lineEnabled : null]}>
          <View style={[styles.circle, props.isEnabled ? styles.cirleEnabled : null]}></View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  line: {
    width: 55,
    height: 35,
    backgroundColor: "white",
    borderRadius: 50,
    borderWidth: 1,

    borderColor: "rgba(114, 115, 121, 0.2)",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  lineEnabled: {
    backgroundColor: "#23D842",
  },
  circle: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(114, 115, 121, 0.2)",
    borderRadius: 50,
    position: "absolute",
    left: 2,
  },
  cirleEnabled: {
    backgroundColor: "white",
    left: null,
    right: 2,
  },
});
