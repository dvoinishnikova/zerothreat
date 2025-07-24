import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

export default function KnifeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.emojiTitle}>🔪 Knife</Text>
        <Text style={styles.subtitle}>Why it’s the worst choice for self-defense</Text>

        <Image
          source={require('../assets/knife.png')}
          style={styles.image}
        />

        <View style={styles.card}>
          <Text style={styles.cardText}>
            A knife might seem like a powerful self-defense tool, but in reality, it's often the worst choice.
            {"\n\n"}
            ➤ Using a knife effectively requires advanced combat skills, especially under pressure and fear.
            {"\n\n"}
            ➤ The risk of seriously injuring or killing someone is extremely high. Even if you’re attacked first, courts may view your actions as excessive and charge you criminally.
            {"\n\n"}
            ➤ Unless you’re highly trained and there’s absolutely no alternative, using a knife can put you in far greater legal and ethical danger than it protects you from.
            {"\n\n"}
            ➤ Safer alternatives like pepper spray, sticks, or tactical pens can neutralize an attacker without risking a fatal outcome — or jail time.
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
  },
  emojiTitle: {
    fontSize: 36,
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
});
