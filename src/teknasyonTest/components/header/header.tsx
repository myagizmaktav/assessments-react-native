import { CloseLogo } from '@/assets/logos/closeLogo';
import { YoutubeLogo } from '@/assets/logos/youtubeLogo';
import { FontAwesome } from '@expo/vector-icons';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.youtubeLogo}>
        {/* <FontAwesome name="youtube-play" size={55} color="#FFF" />
        <Text style={styles.youtubeTitle}>YouTube</Text> */}
        <YoutubeLogo width={230} height={230} fill={'#fff'} />
      </View>
      <TouchableOpacity style={styles.closeButton}>
        <View style={styles.closeButtonBackground}>
          <CloseLogo width={12} height={12} fill={'#FFF'} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    top: 30,
    right: 0,
    padding: 10,
  },
  closeButtonBackground: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
  },
  youtubeLogo: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.0)',
    flexDirection: 'row',
  },
  youtubeTitle: {
    letterSpacing: 0.1,
    marginLeft: 5,
    fontSize: 45,
    fontWeight: 'bold',
    fontFamily: 'youtubeSans',
    color: '#FFF',
  },
  header: {
    paddingTop: 20,
    minHeight: 160,
    width: '100%',
    backgroundColor: '#FF0000',
    position: 'relative',
  },
});
