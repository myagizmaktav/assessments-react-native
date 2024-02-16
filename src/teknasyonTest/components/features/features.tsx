import { SaturnLogo } from "@/assets/logos/saturnLogo";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

type FeaturesProps = {
  Logo: JSX.Element;
  title: string;
  text: string;
};

export const Features = (props: FeaturesProps) => {
  return (
    <View style={styles.features}>
      <View style={styles.featuresLogoWrapper}>{props.Logo}</View>
      <View style={styles.featureTextWrapper}>
        <Text style={styles.featuresTextTitle}>{props.title}</Text>
        <Text style={styles.featuresText}>{props.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  features: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
  },
  featuresLogoWrapper: {
    marginTop: 3,
    padding: 10,
    borderColor: "rgba(114, 115, 121, 0.2)",
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 15,
  },
  featureTextWrapper: {
    flex: 1,
    flexDirection: "column",
  },
  featuresTextTitle: {
    fontSize: 18,
    fontFamily: "youtubeSansBold",
    color: "#484748",
  },
  featuresText: {
    fontSize: 15,
    fontFamily: "youtubeSansLight",
    color: "rgba(114, 115, 121, 1)",
  },
});
