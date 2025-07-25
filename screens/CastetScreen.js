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

export default function CastetScreen() {
  const openLink = (url) => {
                Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
              };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.emojiTitle}>👊 Brass Knuckles</Text>
        <Text style={styles.subtitle}>Dangerous everyday carry</Text>

        <Image
          source={require('../assets/castet.jpg')}
          style={styles.image}
        />

        <View style={styles.card}>
          <Text style={styles.cardText}>
            Brass knuckles are designed for everyday wear but are very dangerous for an attacker.{"\n\n"}
            ⚠️ However, you can face serious legal consequences, as they are almost always classified as <Text style={styles.bold}>cold weapons</Text> during forensic examination, which is a criminal offense in many jurisdictions.{"\n\n"}
            Use caution and know your local laws before carrying or using them.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>More Information</Text>
                                                                <View style={styles.moreInfoContainer}>
                                                                <TouchableOpacity onPress={() => openLink('https://en.wikipedia.org/wiki/Brass_knuckles')}>
                                                                    <Text style={styles.linkText}>• Wikipedia: Brass knuckles</Text>
                                                                  </TouchableOpacity>
                
                                                                  <TouchableOpacity onPress={() => openLink('https://uk.wikipedia.org/wiki/%D0%9A%D0%B0%D1%81%D1%82%D0%B5%D1%82')}>
                                                                    <Text style={styles.linkText}>• Вікіпедія: Кастет</Text>
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
    height: 200,
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
