import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

import { Header } from "@/components/header/header";
import { FontAwesome } from "@expo/vector-icons";
import { PremiumLogo } from "@/components/premiumLogo/premiumLogo";
import { SaturnLogo } from "@/assets/logos/saturnLogo";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentWrapper}>
        <View style={styles.premiumLogo}>
          <PremiumLogo />
        </View>
        <View style={styles.features}>
          <View style={styles.featuresLogoWrapper}>
            <SaturnLogo width={30} height={30} fill="rgba(114, 115, 121, 1)" />
          </View>
          <View style={styles.featureTextWrapper}>
            <Text style={styles.featuresTextTitle}>Ad-Free Browsing</Text>
            <Text style={styles.featuresText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          </View>
        </View>
        <View style={styles.seperator}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  contentWrapper: {
    flex: 1,
    width: "100%",
    padding: 10,
  },
  premiumLogo: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    width: "100%",
  },
  seperator: {
    height: 1,
    width: "100%",
    backgroundColor: "rgba(114, 115, 121, 0.2)",
    marginVertical: 10,
  },

  features: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
  },
  featuresLogoWrapper: {
    marginTop: 3,
    padding: 5,
    // rgba gray color with 0.5 opacity = => rgba(128, 128, 128, 0.5)
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
