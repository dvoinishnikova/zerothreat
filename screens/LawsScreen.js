import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function LawsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Legal Overview</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Article 36 – Necessary Defence</Text>
          <Text style={styles.cardText}>
            Defines when the use of defence is considered legitimate. A person may repel or stop an attack that infringes upon their rights or interests by using proportionate means, without exceeding the limits of necessary defence.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Article 40 – Right to Self-Defence</Text>
          <Text style={styles.cardText}>
            Establishes the right of every individual to protect their life, health, dignity, and property from unlawful attacks, using any available means, as long as the defence is stopped once the threat is no longer present.
          </Text>
        </View>

        <Text style={styles.subtitle}>Additional Notes</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Provocation & Excessive Force</Text>
          <Text style={styles.cardText}>
            Part 2 of Article 36 of the Criminal Code of Ukraine emphasizes that a person must not deliberately provoke an attack or use excessive force. For example, if an attacker is provoking and closing distance, you cannot use lethal weapons. If necessary defence limits are exceeded, it is considered an offense.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Article 118 – Exceeding Defence Limits</Text>
          <Text style={styles.cardText}>
            If you defend yourself and kill the attacker but go beyond the limits of necessary defence (e.g., shooting when there's no longer a threat), it is considered intentional homicide.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Article 124 – Serious Bodily Harm</Text>
          <Text style={styles.cardText}>
            Intentionally causing serious bodily harm during self-defence, beyond what is necessary or justified, may be classified as cruel assault.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Key Advice</Text>
          <Text style={styles.cardText}>
            ✅ Do not attack if the aggressor no longer poses a threat.{"\n"}
            ✅ Do not use lethal force unless the attacker presents a high level of danger.{"\n\n"}
            Prefer non-lethal tools like pepper spray, a baton, or rubber bullets aimed at non-lethal zones.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#002244',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#003366',
    marginVertical: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 18,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#D0D7DE',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 15,
    color: '#333333',
    lineHeight: 22,
  },
});
