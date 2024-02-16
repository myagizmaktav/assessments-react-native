import { WarrantyLogo } from '@/assets/logos/warrantyLogo';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Footer = () => {
  return (
    <View>
      <View style={styles.warrantyWrapper}>
        <WarrantyLogo fill={'#727278'} width={15} height={15} />
        <Text style={styles.warrantyText}>NO PAYMENT NOW</Text>
      </View>
      <View style={styles.footerWrapper}>
        <TouchableOpacity>
          <Text style={styles.footerText}>Privacy Policy</Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>-</Text>
        <TouchableOpacity>
          <Text style={styles.footerText}> Terms of Service </Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>-</Text>
        <TouchableOpacity>
          <Text style={styles.footerText}>Restore</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  warrantyWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  warrantyText: {
    marginLeft: 5,
    color: '#727278',
    fontSize: 12,
    fontWeight: 'bold',
  },
  footerWrapper: {
    paddingHorizontal: 50,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerText: {
    color: '#727278',
    fontSize: 13,
    fontFamily: 'youtubeSans',
  },
});
