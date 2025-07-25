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
import { Linking, TouchableOpacity } from 'react-native';

export default function PneumaticScreen() {
  const navigation = useNavigation();

  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

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

        <Text style={styles.sectionTitle}>Types of Pneumatic Weapons</Text>

        <View style={styles.weaponType}>
          <Image
            source={require('../assets/spring_piston.png')}
            // style={styles.typeImage}
            style={styles.springim}
          />
          <Image
            source={require('../assets/modelspring.png')}
            style={styles.model}
          />

          <Text style={styles.typeText}>
            🏹 <Text style={{ fontWeight: 'bold' }}>Spring Piston</Text> — These airguns are powered by a spring mechanism. While they are relatively affordable and reliable, they lack the power to stop a determined attacker.
          </Text>
        </View>

        <View style={styles.weaponType}>
          <Image
            source={require('../assets/co2_pneumatic.jpg')}
            style={styles.co2}
          />
          <Text style={styles.typeText}>
            ⛽ <Text style={{ fontWeight: 'bold' }}>CO2 Pneumatic</Text> — Powered by CO2 cartridges, these airguns offer higher velocity but still fall short in terms of stopping power, especially in critical situations.
          </Text>
        </View>

        <View style={styles.weaponType}>
          <Image
            source={require('../assets/precharged_pneumatic.png')}
            style={styles.pcp}
          />
          <Text style={styles.typeText}>
            💨 <Text style={{ fontWeight: 'bold' }}>Precharged Pneumatic</Text> — These airguns are more powerful than other types, but they are bulky and difficult to conceal. Not a practical option for self-defense.
          </Text>
        </View>

        <View style={styles.weaponType}>
          <Image
            source={require('../assets/multi.png')}
            style={styles.multi}
          />
          <Text style={styles.typeText}>
            💨 <Text style={{ fontWeight: 'bold' }}>Multi-compression pistols</Text> — These airguns require multiple pumps to build pressure before each shot. They offer good power and accuracy but are slower to reload, making them better suited for target practice than self-defense.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>More Information</Text>
        <View style={styles.moreInfoContainer}>
          <TouchableOpacity onPress={() => openLink('https://en.wikipedia.org/wiki/Air_gun')}>
            <Text style={styles.linkText}>• Wikipedia: Air Gun</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink('https://en.wikipedia.org/wiki/Pneumatic_weapon')}>
            <Text style={styles.linkText}>• Wikipedia: Pneumatic weapon</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink('https://uk.wikipedia.org/wiki/%D0%9F%D0%BD%D0%B5%D0%B2%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%BD%D0%B0_%D0%B7%D0%B1%D1%80%D0%BE%D1%8F')}>
            <Text style={styles.linkText}>• Вікіпедія: Пневматична зброя</Text>
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
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0B3D20',
    marginTop: 32,
    marginBottom: 16,
    textAlign: 'center',
  },
  weaponType: {
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  typeImage: {
    width: '100%',
    height: 140,
    borderRadius: 12,
    resizeMode: 'cover',
    marginBottom: 12,
  },
  typeText: {
    fontSize: 15,
    color: '#444',
    textAlign: 'justify',
  },
  springim: {
    width: '100%',
    height: 80,
    borderRadius: 12,
    resizeMode: 'cover',
    marginBottom: 12,
  },
  model: {
    width: '100%',
    height: 50,
    borderRadius: 12,
    resizeMode: 'cover',
    marginBottom: 12,
  },
  co2: {
    width: '100%',
    height: 300,
    borderRadius: 12,
    resizeMode: 'cover',
    marginBottom: 12,
  },
  pcp: {
    width: '100%',
    height: 100,
    borderRadius: 12,
    resizeMode: 'cover',
    marginBottom: 12,
  },
  multi: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    resizeMode: 'cover',
    marginBottom: 12,
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
