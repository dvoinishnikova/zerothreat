import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';

export default function Guide2Screen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/street.png')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <Text style={styles.title}>2. Street Attack</Text>

        <Text style={styles.text}>
          If someone is tailing you or getting too close — <Text style={styles.bold}>stay alert</Text>.{"\n\n"}
          <Text style={styles.bold}>Change direction</Text> or cross the street. Enter a shop if needed.{"\n\n"}
          <Text style={styles.bold}>Grip your weapon</Text> (spray, pen, stick) discreetly in hand.{"\n\n"}
          If they keep closing the gap — shout loudly: <Text style={styles.bold}>“STOP! I will use my weapon!”</Text>{"\n\n"}
          If they keep coming — <Text style={styles.bold}>spray a heavy cloud behind you and run</Text>.{"\n\n"}
          If you can’t escape — <Text style={styles.bold}>hit first with anything</Text>: umbrella, bag, bottle.{"\n\n"}
          Once safe — <Text style={styles.bold}>call the police</Text> and report your exact location and landmarks.
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
