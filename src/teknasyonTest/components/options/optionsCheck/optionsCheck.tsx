import { TickLogo } from '@/assets/logos/tickLogo';
import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
type OptionsCheckProps = {
  isEnabled: boolean;
  onChange: (isEnabled: boolean) => void;
};
export const OptionsCheck = (props: OptionsCheckProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onChange(!props.isEnabled);
      }}
    >
      <View
        style={[styles.check, props.isEnabled ? styles.checkEnabled : null]}
      >
        {props.isEnabled ? (
          <TickLogo width={20} height={20} fill="white"></TickLogo>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  check: {
    width: 25,
    height: 25,
    borderRadius: 50,
    borderColor: 'rgba(114, 115, 121, 0.2)',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkEnabled: {
    backgroundColor: '#ff0000',
    borderColor: '#ff0000',
  },
});
