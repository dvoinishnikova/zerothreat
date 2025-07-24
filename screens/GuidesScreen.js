import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function GuidesScreen() {
  const navigation = useNavigation();

  const guides = [
    { id: 0, emoji: '📘', title: 'Universal Guide', screen: 'Guide0Screen' },
    { id: 1, emoji: '🏠', title: 'Burglars at Home', screen: 'Guide1Screen' },
    { id: 2, emoji: '🚶', title: 'Street Attack', screen: 'Guide2Screen' },
    { id: 3, emoji: '🚌', title: 'Attack in Public Transport', screen: 'Guide3Screen' },
    { id: 4, emoji: '🏢', title: 'Threat in Stairwell or Elevator', screen: 'Guide4Screen' },
    { id: 5, emoji: '🛒', title: 'Robbery While Shopping', screen: 'Guide5Screen' },
    { id: 6, emoji: '🌃', title: 'Nighttime Attack in Park or Alley', screen: 'Guide6Screen' },
    { id: 7, emoji: '🔪', title: 'Attacker with a Weapon', screen: 'Guide7Screen' },
    { id: 8, emoji: 'z💩', title: 'Behavior Under Occupation', screen: 'Guide8Screen' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.header}>🛡️ Safety Guides</Text>
      {guides.map(guide => (
        <TouchableOpacity
          key={guide.id}
          style={styles.card}
          onPress={() => navigation.navigate(guide.screen)}
        >
          <Text style={styles.title}>
            {guide.emoji} {guide.id}. {guide.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#C3F9C7",
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 30,
    alignSelf: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
});
