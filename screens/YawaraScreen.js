import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { Linking, TouchableOpacity } from 'react-native';

export default function YawaraScreen() {
  const openLink = (url) => {
        Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
      };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.emojiTitle}>🥋 Yawara</Text>
        <Text style={styles.subtitle}>Traditional Japanese self-defense tool</Text>

        <Image
          source={require('../assets/yawara2.jpg')}
          style={styles.image}
        />

        <View style={styles.card}>
          <Text style={styles.cardText}>
            The <Text style={styles.bold}>yawara</Text> is a small handheld stick traditionally used in Japanese martial arts, typically 5–7 inches long.{"\n\n"}
            It is held in the fist with ends protruding on both sides and can be used to <Text style={styles.bold}>strike pressure points</Text>, <Text style={styles.bold}>apply joint locks</Text>, or <Text style={styles.bold}>enhance punches</Text>.{"\n\n"}
            Compact and easy to carry, the yawara offers <Text style={styles.bold}>increased control and force</Text> without causing permanent harm.{"\n\n"}
            However, this is a <Text style={styles.bold}>mediocre option</Text> best suited for those who already have advanced striking skills, as it mainly amplifies the power of existing techniques.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>More Information</Text>
                                <View style={styles.moreInfoContainer}>
                                  <TouchableOpacity onPress={() => openLink('https://uk.wikipedia.org/wiki/%D0%AF%D0%B2%D0%B0%D1%80%D0%B0')}>
                                    <Text style={styles.linkText}>• Вікіпедія: Явара</Text>
                                  </TouchableOpacity>
                                  
                                  
                                  
                                </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6FFF1',
  },
  scroll: {
    padding: 24,
    alignItems: 'center',
  },
  emojiTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0B3D20',
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#3A3A3A',
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 170,
    borderRadius: 16,
    resizeMode: 'cover',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  cardText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
    textAlign: 'justify',
  },
  bold: {
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0B3D20',
    marginTop: 32,
    marginBottom: 16,
    textAlign: 'center',
  },
  moreInfoContainer: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginTop: 24,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  linkText: {
    fontSize: 16,
    color: '#007AFF',
    marginBottom: 12,
    textDecorationLine: 'underline',
  },
});
