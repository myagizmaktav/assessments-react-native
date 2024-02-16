import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const PremiumLogo = () => {
  return (
    <View style={styles.youtubePremium}>
      <FontAwesome name="youtube-play" size={20} color="red" />
      <Text style={styles.youtubePremiumTitle}>YouTube Premium</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  youtubePremium: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: 5,
    borderRadius: 5,
    padding: 8,
    backgroundColor: 'rgba(255,0,0,0.05)',
  },
  youtubePremiumTitle: {
    fontSize: 16,
    fontFamily: 'youtubeSansBold',
    color: 'rgba(255,0,0,0.8)',
  },
});
