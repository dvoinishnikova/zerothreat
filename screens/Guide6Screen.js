import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';

export default function Guide6Screen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/park.png')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <Text style={styles.title}>6. Nighttime Attack in Park or Alley</Text>

        <Text style={styles.text}>
          <Text style={styles.bold}>Avoid dark paths.</Text> Walk with a spray or stick ready in hand.{"\n\n"}
          If you hear footsteps — <Text style={styles.bold}>stop, turn,</Text> do not let them get closer than <Text style={styles.bold}>3–4 meters.</Text>{"\n\n"}
          If they approach — <Text style={styles.bold}>spray a heavy cloud</Text> and <Text style={styles.bold}>sprint without looking back.</Text>{"\n\n"}
          If you’re attacked — <Text style={styles.bold}>hit with all your strength.</Text> Yell and <Text style={styles.bold}>fight dirty.</Text>{"\n\n"}
          <Text style={styles.bold}>Run toward light and people</Text> — bus stop, shop, building.{"\n\n"}
          <Text style={styles.bold}>Ask for help, call emergency.</Text>{"\n\n"}
          <Text style={styles.bold}>Save all recordings or witness names.</Text>
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  scrollContainer: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 25, color: '#111827', textAlign: 'center' },
  text: { fontSize: 16, lineHeight: 24, color: '#4B5563' },
  bold: { fontWeight: 'bold', color: '#111827' },
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
