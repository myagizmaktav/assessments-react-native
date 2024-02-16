import { DownloadLogo } from "@/assets/logos/downloadLogo";
import { GoogleMeetLogo } from "@/assets/logos/googleMeetLogo";
import { SaturnLogo } from "@/assets/logos/saturnLogo";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Features } from "../features/features";
import { FreeTrial } from "../options/freeTrial/freeTrial";
import { YearlyAccess } from "../options/yearlyAcces/yearlyAccess";

export const Content = () => {
  return (
    <View>
      <Features Logo={<SaturnLogo width={25} height={25} fill="rgba(114, 115, 121, 1)" />} title="Ad-Free Browsing" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></Features>
      <View style={styles.seperator}></View>
      <Features Logo={<DownloadLogo width={25} height={25} fill="rgba(114, 115, 121, 1)" />} title="Downloads" text="Morem ipsum dolor sit amet, consectetur adipiscing elit."></Features>
      <View style={styles.seperator}></View>
      <Features Logo={<GoogleMeetLogo width={25} height={25} />} title="Ad-Free Browsing" text="Gorem ipsum dolor sit amet, consectetur adipiscing elit."></Features>
      <View style={{ marginBottom: 20 }}></View>
      <FreeTrial></FreeTrial>
      <View style={{ marginBottom: 15 }}></View>
      <YearlyAccess></YearlyAccess>
    </View>
  );
};

const styles = StyleSheet.create({
  seperator: {
    height: 1,
    width: "100%",
    backgroundColor: "rgba(114, 115, 121, 0.2)",
    marginVertical: 15,
  },
});
