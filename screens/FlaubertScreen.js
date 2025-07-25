import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Linking, TouchableOpacity } from 'react-native';

export default function FlaubertScreen() {
  const openLink = (url) => {
      Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
    };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.titleRow}>
          <Ionicons name="volume-high-outline" size={32} color="#0B3D20" style={{ marginRight: 10 }} />
          <Text style={styles.emojiTitle}>Flaubert Weapons</Text>
        </View>
        <Text style={styles.subtitle}>Why it’s a risky and ineffective choice</Text>

        <Image
          source={require('../assets/flaubert.png')}
          style={styles.image}
        />

        <View style={styles.card}>
          <Text style={styles.cardText}>
            <Ionicons name="checkmark-circle-outline" size={18} color="#0B8A4F" />{" "}
            The only advantage is the <Text style={styles.bold}>loud sound</Text> of the shot, which might attract public attention.
            {"\n\n"}
            <Ionicons name="warning-outline" size={18} color="#D97706" />{" "}
            However, firing at the attacker is not recommended. These weapons have <Text style={styles.bold}>very limited stopping power</Text>.
            {"\n\n"}
            <Ionicons name="close-circle-outline" size={18} color="#B91C1C" />{" "}
            Worse, such a shot can cause <Text style={styles.bold}>serious injury</Text>, leading to legal consequences for the defender.
            {"\n\n"}
            ➤ Use safer, legal alternatives like pepper spray or personal alarms instead.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>More Information</Text>
                        <View style={styles.moreInfoContainer}>
                          <TouchableOpacity onPress={() => openLink('https://uk.wikipedia.org/wiki/%D0%9D%D0%B0%D0%B1%D1%96%D0%B9_%D0%A4%D0%BB%D0%BE%D0%B1%D0%B5%D1%80%D0%B0')}>
                            <Text style={styles.linkText}>• Вікіпедія: Набій Флобера</Text>
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
    paddingBottom: 40,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  emojiTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0B3D20',
    textAlign: 'center',
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
    resizeMode: 'cover',
    borderRadius: 16,
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
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0B3D20',
    marginTop: 32,
    marginBottom: 16,
    textAlign: 'center',
  },
});
