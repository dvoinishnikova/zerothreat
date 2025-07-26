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

export default function PepperScreen() {
  const openLink = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Couldn't load page", err)
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.emojiTitle}>🌶️ Pepper Spray</Text>
        <Text style={styles.subtitle}>Effective and easy to use</Text>

        <Image source={require("../assets/pepper1.jpg")} style={styles.image} />

        <View style={styles.card}>
  <Text style={styles.cardText}>
    Pepper spray is a great self-defense option for all age groups.
    {"\n\n"}
    ✔️ Very easy to use and does not require direct contact with the attacker.{"\n\n"}
    ✔️ Causes temporary blindness and intense irritation, allowing you time to escape.{"\n\n"}
    ✔️ Compact and legal in many places, but always check local regulations before carrying.{"\n\n"}
    ⚠️ <Text style={{ fontWeight: "bold" }}>Important:</Text> Using pepper spray in crowded places or enclosed areas is strictly prohibited, as it can harm bystanders and cause panic. This is a significant drawback you should consider.
    {"\n\n"}
    A reliable choice for personal safety without escalating violence.
  </Text>
</View>


        <Text style={styles.sectionTitle}>More Information</Text>
        <View style={styles.moreInfoContainer}>
          <TouchableOpacity
            onPress={() =>
              openLink("https://en.wikipedia.org/wiki/Pepper_spray")
            }
          >
            <Text style={styles.linkText}>• Wikipedia: Pepper spray</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              openLink(
                "https://uk.wikipedia.org/wiki/%D0%93%D0%B0%D0%B7%D0%BE%D0%B2%D0%B8%D0%B9_%D0%B1%D0%B0%D0%BB%D0%BE%D0%BD%D1%87%D0%B8%D0%BA"
              )
            }
          >
            <Text style={styles.linkText}>• Вікіпедія: Газовий балончик</Text>
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
    height: 200,
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
