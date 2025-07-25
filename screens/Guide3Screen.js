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
          <Text style={styles.bold}>Avoid packed or dark transport</Text>, especially at night.{"\n\n"}
          <Text style={styles.bold}>Stand near an exit</Text> and never with your back to people.{"\n\n"}
          If someone stands too close — <Text style={styles.bold}>hold your spray or pen ready</Text> in your hand.{"\n\n"}
          If they touch or push you — <Text style={styles.bold}>spray directly to the face</Text> and scream.{"\n\n"}
          <Text style={styles.bold}>Hit arms or legs</Text>, push hard, make noise.{"\n\n"}
          Shout: <Text style={styles.bold}>“Call the police! I’m being attacked!”</Text>{"\n\n"}
          <Text style={styles.bold}>Exit at the next stop</Text>, call 911 (or 102 in Ukraine), note the route number.
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
