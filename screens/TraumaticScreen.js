import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

export default function TraumaticScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.emojiTitle}>🛡️ Traumatic Weapons</Text>
        <Text style={styles.subtitle}>⚙️ A good alternative for self-defense</Text>

        <Image
          source={require('../assets/tram.jpg')} // Replace with your image
          style={styles.image}
        />

        <View style={styles.card}>
          <Text style={styles.cardText}>
            <Text style={styles.bold}>🔫 Traumatic weapons (travmat)</Text> are a good option for self-defense, provided you have the proper skills and self-control in dangerous situations.
            {"\n\n"}
            ⚠️ Unfortunately, this type of weapon is not available to everyone, but it becomes possible after completing certain procedures.
            {"\n\n"}
            <Text style={styles.bold}>✅ Advantages of traumatic weapons:</Text> effectiveness, compactness, and ease of use.
            {"\n\n"}
            🚨 Use responsibly and always prioritize your safety first.
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
});
