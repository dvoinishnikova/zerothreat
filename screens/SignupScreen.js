import { useNavigation } from '@react-navigation/native';
import { Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignupScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");

  const handlePress = async () => {
    const userData = { email, password, name, phoneNumber, location };
    try {
      await AsyncStorage.setItem('@user_data', JSON.stringify(userData));
      console.log("✅ User data saved!");
      navigation.navigate("HomeScreen", userData);
    } catch (e) {
      console.error("❌ Failed to save user data:", e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">
        <Text style={styles.text}>Enter your name</Text>
        <TextInput value={name} onChangeText={setName} placeholder="Enter your name" style={styles.input} />

        <Text style={styles.text}>Enter your email</Text>
        <TextInput value={email} onChangeText={setEmail} placeholder="Enter your email" style={styles.input} keyboardType="email-address" autoCapitalize="none" />

        <Text style={styles.text}>Enter your phone number</Text>
        <TextInput value={phoneNumber} onChangeText={setPhoneNumber} placeholder="Enter your phone number" style={styles.input} keyboardType="phone-pad" />

        <Text style={styles.text}>Enter your location</Text>
        <TextInput value={location} onChangeText={setLocation} placeholder="Enter your location" style={styles.input} />

        <Text style={styles.text}>Enter your password</Text>
        <TextInput value={password} onChangeText={setPassword} placeholder="Enter your password" style={styles.input} secureTextEntry />

        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>

        <Text style={styles.new}>Not new?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.linkText}>Log in</Text>
        </TouchableOpacity>
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
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#6E4B23',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 15,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 17,
    marginBottom: 6,
  },
  button: {
    backgroundColor: '#72D978',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: 'black',
    marginTop: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  linkText: {
    color: 'black',
    textDecorationLine: 'underline',
    marginTop: 5,
    fontSize: 15,
  },
  new: {
    marginTop: 10,
    fontSize: 18,
    marginBottom: 8,

  }
});
