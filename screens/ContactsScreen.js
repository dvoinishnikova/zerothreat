import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';

export default function ContactScreen() {
  const handleEmailPress = () => {
    Linking.openURL('mailto:support@example.com');
  };

  const handlePhonePress = () => {
    Linking.openURL('tel:+1234567890');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Us</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Email:</Text>
        <TouchableOpacity onPress={handleEmailPress}>
          <Text style={styles.link}>support@example.com</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Phone:</Text>
        <TouchableOpacity onPress={handlePhonePress}>
          <Text style={styles.link}>+1 (234) 567-890</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Address:</Text>
        <Text style={styles.value}>23444v</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3F9C7',
    paddingTop: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 30,
  },
  card: {
    width: '100%',
    backgroundColor: '#ffffffff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  label: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 15,
    fontWeight: '500',
  },
  link: {
    fontSize: 18,
    color: '#2563EB',
    marginTop: 5,
  },
  value: {
    fontSize: 18,
    color: '#111827',
    marginTop: 5,
  },
});