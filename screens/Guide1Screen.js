import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';

export default function Guide1Screen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/burgl.png')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <Text style={styles.title}>1. Burglars at Home</Text>

        <Text style={styles.text}>
          <Text style={styles.bold}>Switch from passive to aggressive mode</Text> — this is life-threatening.{"\n\n"}
          Do not enter <Text style={styles.bold}>open spaces</Text> like hallways.{"\n\n"}
          <Text style={styles.bold}>Arm yourself</Text> (spray, stick, knife) and take cover with a clear view of entrances.{"\n\n"}
          If you have family — command: <Text style={styles.bold}>“Barricade and call the police!”</Text>{"\n\n"}
          If you hear intruders approaching — shout: <Text style={styles.bold}>“I’m armed! One more step and I fight back!”</Text>{"\n\n"}
          If they enter your room — <Text style={styles.bold}>strike first, without hesitation</Text>.{"\n\n"}
          After the threat is neutralized — <Text style={styles.bold}>do not chase</Text>. Lock yourself in and <Text style={styles.bold}>call the police</Text>. Give your exact address.
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
    color: '#111827',
  },
});
