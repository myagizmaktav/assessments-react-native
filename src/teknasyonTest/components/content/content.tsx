import { DownloadLogo } from '@/assets/logos/downloadLogo';
import { GoogleMeetLogo } from '@/assets/logos/googleMeetLogo';
import { SaturnLogo } from '@/assets/logos/saturnLogo';
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Features } from '../features/features';
import { FreeTrial } from '../options/freeTrial/freeTrial';
import { YearlyAccess } from '../options/yearlyAcces/yearlyAccess';
import { DayFreeTrial } from '../options/dayFreeTrial/dayFreeTrial';

export const Content = () => {
  return (
    <View>
      <Features
        Logo={
          <SaturnLogo width={25} height={25} fill="rgba(114, 115, 121, 1)" />
        }
        title="Ad-Free Browsing"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      ></Features>
      <View style={styles.seperator}></View>
      <Features
        Logo={
          <DownloadLogo width={25} height={25} fill="rgba(114, 115, 121, 1)" />
        }
        title="Downloads"
        text="Morem ipsum dolor sit amet, consectetur adipiscing elit."
      ></Features>
      <View style={styles.seperator}></View>
      <Features
        Logo={<GoogleMeetLogo width={25} height={25} />}
        title="Ad-Free Browsing"
        text="Gorem ipsum dolor sit amet, consectetur adipiscing elit."
      ></Features>
      <View style={{ marginBottom: 20 }}></View>
      <FreeTrial></FreeTrial>
      <View style={{ marginBottom: 15 }}></View>
      <YearlyAccess></YearlyAccess>
      <View style={{ marginBottom: 15 }}></View>
      <DayFreeTrial></DayFreeTrial>
      <View style={{ marginBottom: 10 }}></View>
      <TouchableOpacity style={styles.acceptButton}>
        <Text style={styles.acceptButtonText}>7 Day Trial and Plan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  seperator: {
    height: 1,
    width: '100%',
    backgroundColor: 'rgba(114, 115, 121, 0.2)',
    marginVertical: 15,
  },
  acceptButton: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#343334',
    justifyContent: 'center',
  },
  acceptButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'youtubeSansBold',
    marginBottom: 5,
  },
});
