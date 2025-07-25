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

export default function TraumaticScreen() {
  const openLink = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Couldn't load page", err)
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.emojiTitle}>🛡️ Traumatic Weapons</Text>
        <Text style={styles.subtitle}>
          ⚙️ A good alternative for self-defense
        </Text>

        <Image source={require("../assets/tram.jpg")} style={styles.image} />

        <View style={styles.card}>
          <Text style={styles.cardText}>
            <Text style={styles.bold}>🔫 Traumatic weapons (travmat)</Text> are
            a good option for self-defense, provided you have the proper skills
            and self-control in dangerous situations.
            {"\n\n"}
            ⚠️ Unfortunately, this type of weapon is not available to everyone,
            but it becomes possible after completing certain procedures.
            {"\n\n"}
            <Text style={styles.bold}>
              ✅ Advantages of traumatic weapons:
            </Text>{" "}
            effectiveness, compactness, and ease of use.
            {"\n\n"}
            🚨 Use responsibly and always prioritize your safety first.
          </Text>
        </View>
        <Text style={styles.sectionTitle}>More Information</Text>
        <View style={styles.moreInfoContainer}>
          <TouchableOpacity
            onPress={() =>
              openLink(
                "https://uk.wikipedia.org/wiki/%D0%A2%D1%80%D0%B0%D0%B2%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%BD%D0%B0_%D0%B7%D0%B1%D1%80%D0%BE%D1%8F"
              )
            }
          >
            <Text style={styles.linkText}>• Вікіпедія: Травматична зброя</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openLink("https://en.wikipedia.org/wiki/Traumatic_pistol")
            }
          >
            <Text style={styles.linkText}>• Wikipedia: Traumatic pistol</Text>
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
    width: "100%",
    height: 170,
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
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0B3D20",
    marginTop: 32,
    marginBottom: 16,
    textAlign: "center",
  },
});
