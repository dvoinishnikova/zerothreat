import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Linking, TouchableOpacity } from "react-native";

export default function StickScreen() {
  const openLink = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Couldn't load page", err)
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.emojiTitle}>🪵 Stick</Text>
        <Text style={styles.subtitle}>A versatile self-defense tool</Text>

        <Image source={require("../assets/stick.png")} style={styles.image} />

        <View style={styles.card}>
          <Text style={styles.cardText}>
            <Text style={styles.bold}>Sticks and climbing poles</Text> are
            excellent weapons for self-defense, especially if you are physically
            fit.{"\n\n"}
            <Text style={styles.bold}>Many types of sticks</Text> are available
            on the market that serve well both as walking aids and effective
            defensive tools.{"\n\n"}
            <Text style={styles.bold}>Advantages include:</Text> ease of use,
            long reach, and the ability to keep attackers at a distance.{"\n\n"}
            Use responsibly and always remember to prioritize your safety first.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>More Information</Text>
        <View style={styles.moreInfoContainer}>
          <TouchableOpacity
            onPress={() =>
              openLink("https://www.youtube.com/watch?v=yCyT3661onE")
            }
          >
            <Text style={styles.linkText}>
              • YouTube: Master Combat Stick Basics for Quick Self-Defense
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              openLink("https://en.wikipedia.org/wiki/Stick-fighting")
            }
          >
            <Text style={styles.linkText}>• Wikipedia: Stick-fighting</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6FFF1",
  },
  scroll: {
    padding: 24,
    alignItems: "center",
  },
  emojiTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#0B3D20",
    textAlign: "center",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#3A3A3A",
    textAlign: "center",
    marginTop: 6,
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 16,
    resizeMode: "cover",
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  cardText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333333",
    textAlign: "justify",
  },
  bold: {
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0B3D20",
    marginTop: 32,
    marginBottom: 16,
    textAlign: "center",
  },
  moreInfoContainer: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    marginTop: 24,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  linkText: {
    fontSize: 16,
    color: "#007AFF",
    marginBottom: 12,
    textDecorationLine: "underline",
  },
});
