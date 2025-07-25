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

export default function KnifeScreen() {
  const openLink = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Couldn't load page", err)
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.emojiTitle}>🔪 Knife</Text>
        <Text style={styles.subtitle}>
          Why it’s the worst choice for self-defense
        </Text>

        <Image source={require("../assets/knife.png")} style={styles.image} />

        <View style={styles.card}>
          <Text style={styles.cardText}>
            A knife might seem like a powerful self-defense tool, but in
            reality, it's often the worst choice.
            {"\n\n"}➤ Using a knife effectively requires advanced combat skills,
            especially under pressure and fear.
            {"\n\n"}➤ The risk of seriously injuring or killing someone is
            extremely high. Even if you’re attacked first, courts may view your
            actions as excessive and charge you criminally.
            {"\n\n"}➤ Unless you’re highly trained and there’s absolutely no
            alternative, using a knife can put you in far greater legal and
            ethical danger than it protects you from.
            {"\n\n"}➤ Safer alternatives like pepper spray, sticks, or tactical
            pens can neutralize an attacker without risking a fatal outcome — or
            jail time.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>
          Types of Knives and Their Purpose
        </Text>

        <View style={styles.knifeType}>
          <Image
            source={require("../assets/folding_knife.jpg")}
            style={styles.typeImage}
          />
          <Text style={styles.typeText}>
            🗂️ <Text style={{ fontWeight: "bold" }}>Folding Knife</Text> —
            Compact and easy to carry, but not ideal for quick self-defense.
            Opening the blade takes time and may fail under pressure.
          </Text>
        </View>

        <View style={styles.knifeType}>
          <Image
            source={require("../assets/fixed_blade.png")}
            style={styles.typeImage}
          />
          <Text style={styles.typeText}>
            🪓 <Text style={{ fontWeight: "bold" }}>Fixed-Blade Knife</Text> —
            Strong and reliable. Often used for hunting or survival, but
            difficult to conceal and legally restricted in many areas.
          </Text>
        </View>

        <View style={styles.knifeType}>
          <Image
            source={require("../assets/karambit.png")}
            style={styles.typeImage}
          />
          <Text style={styles.typeText}>
            🌀 <Text style={{ fontWeight: "bold" }}>Karambit</Text> — Curved
            blade originally from Southeast Asia. Looks intimidating, but
            requires specialized training to use effectively and safely.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>More Information</Text>
        <View style={styles.moreInfoContainer}>
          <TouchableOpacity
            onPress={() => openLink("https://en.wikipedia.org/wiki/Knife")}
          >
            <Text style={styles.linkText}>• Wikipedia: Knife</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openLink("https://uk.wikipedia.org/wiki/%D0%9D%D1%96%D0%B6")
            }
          >
            <Text style={styles.linkText}>• Вікіпедія: Ніж</Text>
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
    fontSize: 36,
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
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0B3D20",
    marginTop: 32,
    marginBottom: 16,
    textAlign: "center",
  },
  knifeType: {
    backgroundColor: "#F9F9F9",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  typeImage: {
    width: "100%",
    height: 140,
    borderRadius: 12,
    resizeMode: "cover",
    marginBottom: 12,
  },
  typeText: {
    fontSize: 15,
    color: "#444",
    textAlign: "justify",
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
