import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';

export default function Guide3Screen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/transport.png')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.title}>3. Attack in Public Transport</Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Avoid crowded or poorly lit transport</Text>, especially late at night.{"\n\n"}
          <Text style={styles.bold}>Stand near the exit</Text> and avoid turning your back to others.{"\n\n"}
          If someone invades your space — <Text style={styles.bold}>stay calm and assess quickly</Text>.{"\n\n"}
          <Text style={styles.bold}>Do NOT use pepper spray</Text> — in an enclosed space, it can harm everyone, including you.{"\n\n"}
          <Text style={styles.bold}>Do NOT start a physical fight</Text> — buses or trams are unstable, and you could fall or get hurt.{"\n\n"}
          Instead, <Text style={styles.bold}>raise your voice and ask for help</Text>. Make eye contact with others and say:{" "}
          <Text style={styles.bold}>“Please help me! This person is harassing me!”</Text>{"\n\n"}
          If the situation escalates — <Text style={styles.bold}>press the emergency button</Text> or alert the driver.{"\n\n"}
          Get off at the next stop if possible and <Text style={styles.bold}>call the police (911 or 102 in Ukraine)</Text>.{"\n\n"}
          Remember to note the vehicle number or route.
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
    marginBottom: 25,
    color: '#111827',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4B5563',
  },
  bold: {
    fontWeight: 'bold',
    color: '#1F2937',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
});
