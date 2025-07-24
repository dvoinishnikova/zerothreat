import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';

export default function Guide4Screen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/elevator.png')} // заміни на свою картинку
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <Text style={styles.title}>4. Threat in Stairwell or Elevator</Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Avoid entering the elevator with strangers.</Text> 
          If you do — press a random lower floor to get out.{"\n\n"}
          Once outside — <Text style={styles.bold}>move quickly towards a safe space.</Text>{"\n\n"}
          If the person gets aggressive — <Text style={styles.bold}>don’t waste time screaming. </Text> 
           Strike hard (<Text style={styles.bold}>eyes, groin, neck</Text>).{"\n\n"}
          <Text style={styles.bold}>Anything is a weapon:</Text> keys, bag, phone — use what you have.{"\n\n"}
          <Text style={styles.bold}>Run to open, lit areas</Text> — call the police immediately.{"\n\n"}
          Report the <Text style={styles.bold}>address and entrance number</Text> to dispatch.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  scrollContainer: { padding: 20 },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
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
});
