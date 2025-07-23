import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function GuidesScreen() {
  const guides = [
    {
      title: 'How to Stay Safe in Public',
      content: 'Be aware of your surroundings. Avoid dark areas at night. Trust your instincts.',
    },
    {
      title: 'Legal Self-Defense Tips',
      content: 'Always act proportionally. Do not carry illegal weapons. Know your local laws.',
    },
    {
      title: 'Emergency Situations',
      content: 'Call the police immediately. Try to stay calm. Describe the situation clearly.',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>Safety Guides</Text>

        {guides.map((guide, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.title}>{guide.title}</Text>
            <Text style={styles.text}>{guide.content}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#F9FAFB',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  container: {
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
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#4B5563',
  },
});
