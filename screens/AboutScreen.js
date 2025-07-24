import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.header}>About Our Mission</Text>

        <Image
          source={require('../assets/img1.jpg')}
          style={styles.img}
        />

        <Text style={styles.text}>
          🛡️ <Text style={styles.bold}>Self-defense</Text> is something that is very underestimated in our society. The problem of attacks on people — for robbery or simply to show power — remains widespread.
          {"\n\n"}
          👥 Our team is focused on delivering <Text style={styles.bold}>clear and practical self-defense knowledge</Text> — so that you stay protected not only from attackers, but also from <Text style={styles.bold}>legal troubles</Text> that might follow.
          {"\n\n"}
          ❗Many mistakenly believe that living in a safe area with strong police presence means <Text style={styles.bold}>self-defense is unnecessary</Text>. But one unexpected event can change everything. As the saying goes:{" "}
          <Text style={styles.bold}>“Better to have a weapon and not need it than to need it and not have it.”</Text>
          {"\n\n"}
          🚫 Another misconception: carrying a self-defense tool guarantees safety. In reality, real-life situations often leave no time for careful thinking.{" "}
          <Text style={styles.bold}>Our goal is to teach you how to stay calm under stress</Text>, react appropriately, and <Text style={styles.bold}>avoid conflict whenever possible</Text> — because the best fight is the one that never happens.
          {"\n\n"}
          🧰 There are many means of self-defense — from a simple stick to a firearm. <Text style={styles.bold}>Everyday items</Text> can become effective tools in critical moments.
          {"\n\n"}
          🎒 Take a <Text style={styles.bold}>backpack</Text>, for instance. It’s completely ordinary — yet when used correctly, it can become a serious problem for the opponent. The same goes for a <Text style={styles.bold}>stick</Text>, which in capable hands is a strong tool against attack.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3F9C7',
  },
  scroll: {
    alignItems: 'center',
    padding: 24,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0B2E10',
    marginBottom: 20,
    textAlign: 'center',
  },
  img: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    borderRadius: 12,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#1A1A1A',
    lineHeight: 24,
    textAlign: 'justify',
  },
  bold: {
    fontWeight: 'bold',
    color: '#0B2E10',
  },
});
