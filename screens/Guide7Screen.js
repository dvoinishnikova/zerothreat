import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';

export default function Guide7Screen() {
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

        <Text style={styles.title}>7. Attacker with a Weapon</Text>
        <Text style={styles.text}>
          If you see a knife, stick, or any weapon — this is a <Text style={styles.bold}>deadly threat</Text>. <Text style={styles.bold}>Act immediately.</Text>{"\n\n"}
          <Text style={styles.bold}>Do not approach.</Text> Step back, look for a barrier (fence, door, car).{"\n\n"}
          Loudly: <Text style={styles.bold}>“I’m armed!”</Text>{"\n\n"}
          Create a barrier if possible (chair, backpack, door).{"\n\n"}
          If escape is impossible — <Text style={styles.bold}>attack first.</Text>{"\n\n"}
          Go for the weapon hand, face, throat.{"\n\n"}
          After — <Text style={styles.bold}>don’t touch the weapon.</Text> <Text style={styles.bold}>Back away.</Text>{"\n\n"}
          <Text style={styles.bold}>Call the police.</Text> Say: “I was attacked with a weapon. I defended myself. I’m at…”
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
