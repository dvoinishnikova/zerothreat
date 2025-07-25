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

export default function TacticalPenScreen() {
  const openLink = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Couldn't load page", err)
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.emojiTitle}>🖊️ Tactical Pen</Text>
        <Text style={styles.subtitle}>A discreet self-defense tool</Text>

        <Image source={require("../assets/pen.jpg")} style={styles.image} />

        <View style={styles.card}>
          <Text style={styles.cardText}>
            A tactical pen is a{" "}
            <Text style={styles.bold}>"concealed carry weapon"</Text> — legally,
            it’s not considered a weapon, but it can be effectively used for
            self-defense.{"\n\n"}
            This tool is best suited for those who have a{" "}
            <Text style={styles.bold}>well-developed striking technique</Text>,
            as it mainly serves to{" "}
            <Text style={styles.bold}>increase the force of strikes</Text>.
            {"\n\n"}
            Compact and easy to carry, the tactical pen can be a practical
            option for discreet protection without attracting attention.
          </Text>
        </View>
        <Text style={styles.sectionTitle}>More Information</Text>
        <View style={styles.moreInfoContainer}>
          <TouchableOpacity
            onPress={() =>
              openLink("https://www.youtube.com/watch?v=KjOoRMQcR7s")
            }
          >
            <Text style={styles.linkText}>
              • YouTube: HOW TO USE A TACTICAL PEN
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              openLink(
                "https://oborona24.com.ua/ua/blog/zachem-nuzhny-takticheskie-ruchki"
              )
            }
          >
            <Text style={styles.linkText}>
              • Для чого потрібні тактичні ручки?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              openLink(
                "https://vartua.com/news/182/surefire-pen-prykhovana-perevaga-scho-zh-take-taktychna-ruchka-"
              )
            }
          >
            <Text style={styles.linkText}>• Що ж таке тактична ручка?</Text>
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
