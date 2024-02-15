import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import CloseButton from "../../components/CloseButton/CloseButton";
import ActionContainer from "./components/ActionContainer/ActionContainer";
import FlagBox from "./components/FlagBox/FlagBox";
import FooterLinks from "./components/FooterLinks/FooterLinks";
import FreeTrialEnabled from "./components/FreeTrialEnabled/FreeTrialEnabled";
import Header from "./components/Header/Header";
import PremiumBoxes from "./components/PremiumFeatures/PremiumBoxes";
import Prices from "./components/Prices/Prices";

const LandingLatestScreen = () => {
  const data = {
    header: {
      image: require("./assets/youtubeLogo.png"),
    },
    flagBox: {
      image: require("./assets/youtubeIcon.png"),
      text: "Youtube Premium",
    },
    premiumBoxes: [
      {
        icon: require("./assets/browser.png"),
        title: "Ad Free Browsing",
        description: "Dorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        icon: require("./assets/downloads.png"),
        title: "Downloads",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        icon: require("./assets/meet.png"),
        title: "Co-watch with Google Meet",
        description: "Gorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    ],
    freeTrialEnabled: {
      title: "not sure yet?",
      text: "Enable Free Trial",
    },
    prices: [
      {
        title: "YEARLY ACCESS",
        saving: "SAVE %89",
        price: "$0,11/day",
        boldPrice: "$39.99/year",
      },
      {
        title: "30-DAY FREE TRIAL",
        saving: "",
        price: "",
        boldPrice: "then $6.99/week",
      },
    ],
    actionContainer: {
      title: null,
      buttonTitle: "7 Day Trial and Plan",
      cancelText: "NO PAYMENT NOW",
      icon: require("./assets/shield.png"),
    },
    footerLinks: [
      {
        title: "Privacy Policy",
        url: "https://www.google.com",
      },
      {
        title: "Terms of Service",
        url: "https://www.google.com",
      },
      {
        title: "Restore",
        url: "https://www.google.com",
      },
    ],
    closeButton: {
      icon: require("./assets/close.png"),
    },
  };
  return (
    <View style={styles.safeAreaView}>
      <CloseButton closeButton={data.closeButton} />
      <Header header={data.header} />
      <ScrollView contentContainerStyle={styles.container}>
        <FlagBox flagBox={data.flagBox} />
        <PremiumBoxes premiumBoxes={data.premiumBoxes} />
        <FreeTrialEnabled freeTrialEnabled={data.freeTrialEnabled} />
        <Prices prices={data.prices} />
      </ScrollView>
      <View style={styles.bottomView}>
        <ActionContainer actionContainer={data.actionContainer} />
        <FooterLinks footerLinks={data.footerLinks} />
      </View>
    </View>
  );
};

export default LandingLatestScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {},
  bottomView: {
    marginBottom: 24,
  },
});
