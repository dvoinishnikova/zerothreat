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


export default function TasersScreen() {
  const openLink = (url) => {
      Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
    };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.emojiTitle}>⚡ Taser</Text>
        <Text style={styles.subtitle}>Why it’s not the best self-defense tool ⚠️</Text>

        <Image
          source={require('../assets/taser.jpg')}
          style={styles.image}
        />

        <View style={styles.card}>
          <Text style={styles.cardText}>
            <Text style={styles.bold}>Tasers are a mediocre option</Text> when it comes to personal safety. Despite their intimidating appearance, they have several critical drawbacks.{"\n\n"}

            <Text style={styles.bold}>Close contact is required</Text> to use a taser, which puts you in direct danger during an attack. If you lack training, it can be turned against you.{"\n\n"}

            <Text style={styles.bold}>They may be useful</Text> for scaring off stray dogs, but in real-life confrontations with people, their reliability is questionable.{"\n\n"}

            <Text style={styles.bold}>Alternatives like pepper spray</Text> offer better range, safer distance, and are legally easier to justify.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>More Information</Text>
                        <View style={styles.moreInfoContainer}>
                          <TouchableOpacity onPress={() => openLink('https://uk.wikipedia.org/wiki/%D0%A2%D0%B5%D0%B9%D0%B7%D0%B5%D1%80')}>
                            <Text style={styles.linkText}>• Вікіпедія: Тейзер</Text>
                          </TouchableOpacity>
                          <TouchableOpacity onPress={() => openLink('https://en.wikipedia.org/wiki/Taser')}>
                            <Text style={styles.linkText}>• Wikipedia: Taser</Text>
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
