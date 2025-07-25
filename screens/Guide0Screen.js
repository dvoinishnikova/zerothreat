import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

export default function Guide0Screen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>General Self-Defense Principles</Text>

        <Text style={styles.text}>
          <Text style={styles.bold}>1. Change your mindset:</Text> switch from peaceful to aggressive. Realize the danger is real and immediate.{"\n\n"}

          <Text style={styles.bold}>2. Do not panic:</Text> If you're trained or prepared, stay calm — panic wastes time.{"\n\n"}

          <Text style={styles.bold}>3. Always have your weapon within fast reach:</Text> not buried in your bag.{"\n\n"}

          <Text style={styles.bold}>4. Keep distance:</Text> Stay as far as possible from the attacker.{"\n\n"}

          <Text style={styles.bold}>5. If you can escape — RUN:</Text> Do not hesitate if there’s nothing to protect. Ideally, spray a cloud of pepper behind you as you flee.{"\n\n"}

          <Text style={styles.bold}>6. If escape is impossible — attack aggressively:</Text> Use surprise, improvised weapons, and strike first.{"\n\n"}

          <Text style={styles.bold}>7. If the attacker has a weapon:</Text> this is life or death. Keep your distance and never approach.{"\n\n"}

          <Text style={styles.bold}>8. Notice signs of aggression:</Text> (e.g., pulling a weapon or charging) — draw your weapon and loudly warn that you’ll use it.{"\n\n"}

          <Text style={styles.bold}>9. Use improvised means:</Text> a bag, a stick, a rock — anything can give you an edge.{"\n\n"}

          <Text style={styles.bold}>10. After neutralizing the attacker:</Text> calm down, lock yourself in, and immediately call the police. Start by stating your exact address.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#111827',
  },
  text: {
    fontSize: 16,
    lineHeight: 26,
    color: '#4B5563',
  },
  bold: {
    fontWeight: 'bold',
    color: '#1F2937',
  },
});
