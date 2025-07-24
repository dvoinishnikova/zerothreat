import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';

export default function Guide8Screen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/weap.png')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <Text style={styles.title}>8. Behavior Under Occupation</Text>

        <Text style={styles.sectionTitle}>Stay Unnoticed</Text>
        <Text style={styles.text}>
           <Text style={styles.bold}>Avoid patriotic symbols.</Text> Don’t post photos or messages.{"\n"}
          – <Text style={styles.bold}>Don’t wear camouflage or body armor</Text> unless you’re military — it’s dangerous.{"\n"}
          – Stay <Text style={styles.bold}>neutral</Text> outside. <Text style={styles.bold}>Walk quickly and confidently.</Text>
        </Text>

        <Text style={styles.sectionTitle}>⚠️ Self-Defense if Attacked</Text>
        <Text style={styles.text}>
          – <Text style={styles.bold}>Do not open doors</Text> to armed people. Block entry with furniture.{"\n"}
          – If you have a weapon — use it <Text style={styles.bold}>only when life is in real danger.</Text>{"\n"}
          – <Text style={styles.bold}>Shoot to stop, not to kill.</Text> Then retreat.{"\n"}
          – <Text style={styles.bold}>Do not act like a hero</Text> if it risks your life or your loved ones.
        </Text>

        <Text style={styles.sectionTitle}>🔫 If You Have a Weapon</Text>
        <Text style={styles.text}>
          – <Text style={styles.bold}>Weapon is not for show</Text> — it's your silent survival tool.{"\n"}
          – Keep it <Text style={styles.bold}>close, but hidden.</Text>{"\n"}
          – Use it <Text style={styles.bold}>only when all else fails.</Text>{"\n"}
          – After use — <Text style={styles.bold}>don’t touch the attacker.</Text> Report to volunteers or record what happened.
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  scrollContainer: { padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#111827',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#1F2937',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4B5563',
  },
  bold: {
    fontWeight: 'bold',
    color: '#111827',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
});
