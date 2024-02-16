import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { OptionsCheck } from '../optionsCheck/optionsCheck';

// todo Make isEnabled take from parent component
export const DayFreeTrial = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  return (
    <View
      style={[styles.container, isEnabled ? styles.containerIsEnabled : null]}
    >
      <View style={styles.leftSide}>
        <Text adjustsFontSizeToFit={true} style={styles.text}>
          30-DAY FREE TRIAL
        </Text>
        <View style={styles.subTitleWrapper}>
          <Text adjustsFontSizeToFit={true} style={styles.title}>
            then $6.99/week
          </Text>
        </View>
      </View>

      <View style={styles.rightSide}>
        <OptionsCheck
          isEnabled={isEnabled}
          onChange={(value: boolean) => {
            setIsEnabled(value);
          }}
        ></OptionsCheck>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    borderRadius: 8,
    paddingHorizontal: 20,
    flexDirection: 'row',

    backgroundColor: 'white',
    borderColor: 'rgba(114, 115, 121, 0.2)',
    borderWidth: 1,
  },
  containerIsEnabled: {
    borderColor: 'rgba(255, 0, 0, 1)',
    borderWidth: 2,
  },
  leftSide: {
    width: '50%',
    justifyContent: 'center',
    paddingBottom: 15,
  },
  subTitleWrapper: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  text: {
    color: 'rgba(114, 115, 121, 1)',
    fontSize: 14,
    fontFamily: 'youtubeSans',
    textAlignVertical: 'top',
    textAlign: 'left',
    marginTop: 10,
    alignItems: 'baseline',
  },

  title: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'youtubeSansBold',
    textAlignVertical: 'top',
  },
  titleLight: {
    fontWeight: 'normal',
    fontFamily: 'youtubeSansLight',
    color: 'rgba(114, 115, 121, 1)',
  },

  seperator: {
    height: 1,
    width: '100%',
    backgroundColor: 'rgba(114, 115, 121, 0.2)',
    marginVertical: 15,
  },
  marginBottom: {
    marginBottom: 20,
  },
  rightSide: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
