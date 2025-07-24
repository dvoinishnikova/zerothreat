import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PneumaticScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.emojiTitle}>🔫 Pneumatic Weapons</Text>
        <Text style={styles.subtitle}>Why airguns are not effective for self-defense</Text>

        <Image
          source={require('../assets/pneumatic.png')}
          style={styles.image}
        />

        <View style={styles.card}>
          <Text style={styles.cardText}>
            Pneumatic (air-powered) weapons are a poor and unreliable choice for self-defense.
            {"\n\n"}
            ➤ They have very <Text style={styles.bold}>low stopping power</Text>, meaning they rarely prevent an attacker from continuing their actions.
            {"\n\n"}
            ➤ Penetration is minimal and not effective against thick clothing or determined aggressors.
            {"\n\n"}
            ➤ In many jurisdictions, using airguns in self-defense may still lead to <Text style={styles.bold}>criminal charges</Text>, especially if they cause injury.
            {"\n\n"}
            ➤ Overall, airguns are more suited for training or sport — not real-life protection.
          </Text>
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
  emojiTitle: {
    fontSize: 34,
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
});
