import { useNavigation } from '@react-navigation/native';
import { Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditScreen() {
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
      <Text style={styles.text}>Enter your name</Text>
      <TextInput value={name} onChangeText={setName} placeholder="Enter your name" style={styles.input} />

      <Text style={styles.text}>Enter your email</Text>
      <TextInput value={email} onChangeText={setEmail} placeholder="Enter your email" style={styles.input} keyboardType="email-address" autoCapitalize="none" />

      <Text style={styles.text}>Enter your password</Text>
      <TextInput value={password} onChangeText={setPassword} placeholder="Enter your password" style={styles.input} secureTextEntry />

      <Text style={styles.text}>Enter your phone number</Text>
      <TextInput value={phoneNumber} onChangeText={setPhoneNumber} placeholder="Enter your phone number" style={styles.input} keyboardType="phone-pad" />

      <Text style={styles.text}>Enter your location</Text>
      <TextInput value={location} onChangeText={setLocation} placeholder="Enter your location" style={styles.input} />

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#C3F9C7',
  },
  input: {
    borderWidth: 1,
    borderColor: '#6E4B23',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#72D978',
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: 'black',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});
