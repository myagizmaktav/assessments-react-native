import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

import { Header } from "@/components/header/header";
import { PremiumLogo } from "@/components/premiumLogo/premiumLogo";
import { SaturnLogo } from "@/assets/logos/saturnLogo";
import { Features } from "@/components/features/features";
import { DownloadLogo } from "../../assets/logos/downloadLogo";
import { GoogleMeetLogo } from "@/assets/logos/googleMeetLogo";
import { Content } from "@/components/content/content";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentWrapper}>
        <View style={styles.premiumLogo}>
          <PremiumLogo />
        </View>
        <View style={styles.content}>
          <Content></Content>
        </View>
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
  content: {
    marginTop: 20,
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
    marginVertical: 15,
  },
  marginBottom: {
    marginBottom: 20,
  },
});
