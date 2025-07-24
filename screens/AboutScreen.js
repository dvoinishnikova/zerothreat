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
          Self-defense is something that is very underestimated in our society. The problem of attacks on people, for the purpose of robbery or simply the desire of the attacker to show superiority, remains widespread.
          {"\n\n"}
          Our team is focused on delivering clear and practical self-defense knowledge — so that you stay protected not only from attackers, but also from legal troubles that might follow.
          {"\n\n"}
          Many mistakenly believe that living in a safe area with strong police presence means self-defense is unnecessary. But one unexpected event can lead to devastating consequences. As the saying goes: “Better to have a weapon and not need it than to need it and not have it.”
          {"\n\n"}
          Another misconception: carrying a self-defense tool guarantees safety. In reality, real-life situations often leave no time for careful thinking. Our goal is to teach you how to stay calm under stress, react appropriately, and avoid conflict whenever possible — because the best fight is the one that never happens.
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
});
