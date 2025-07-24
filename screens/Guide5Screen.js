import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';

export default function Guide5Screen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

      <View style={styles.imageContainer}>
                <Image
                  source={require('../assets/shop.png')}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>

        <Text style={styles.title}>5. Robbery While Shopping</Text>
        <Text style={styles.text}>
          If someone grabs your pocket or bag — <Text style={styles.bold}>yell: “What are you doing?! Back off!”</Text>{"\n\n"}
          If they don’t let go — <Text style={styles.bold}>strike the hand or face</Text>.{"\n\n"}
          If there’s more than one — <Text style={styles.bold}>don’t try to protect your belongings</Text>, go into defense mode.{"\n\n"}
          <Text style={styles.bold}>Use anything nearby</Text> — umbrella, bottle, shopping cart.{"\n\n"}
          <Text style={styles.bold}>Call security</Text> and demand they check the cameras.{"\n\n"}
          <Text style={styles.bold}>Call the police</Text>, describe the suspect.{"\n\n"}
          If possible — <Text style={styles.bold}>ask witnesses to stay, record if safe</Text>.
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
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4B5563'
  },
  bold: {
    fontWeight: 'bold',
    color: '#1F2937'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#111827',
    textAlign: 'center',
  },
});
