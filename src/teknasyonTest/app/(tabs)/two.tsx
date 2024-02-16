import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import { Header } from '@/components/header/header';
import { PremiumLogo } from '@/components/premiumLogo/premiumLogo';
import { Content } from '@/components/content/content';
import { Footer } from '@/components/footer/footer';

export default function MainPage() {
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
        <Footer></Footer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  content: {
    marginTop: 20,
  },
  contentWrapper: {
    flex: 1,
    width: '100%',
    padding: 15,
  },
  premiumLogo: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 10,
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
});
