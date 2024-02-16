import { FontAwesome } from '@expo/vector-icons';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.youtubeLogo}>
        <FontAwesome name="youtube-play" size={75} color="#FFF" />
        <Text style={styles.youtubeTitle}>Youtube</Text>
      </View>
      <TouchableOpacity style={styles.closeButton}>
        <View style={styles.closeButtonBackground}>
          <FontAwesome name="close" size={20} color="#FFF" />
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
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.0)',
    flexDirection: 'row',
  },
  youtubeTitle: {
    marginLeft: 10,
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'youtubeSansBold',
    color: '#FFF',
  },
  header: {
    paddingTop: 20,
    minHeight: 170,
    width: '100%',
    backgroundColor: '#FF0000',
    position: 'relative',
  },
});
