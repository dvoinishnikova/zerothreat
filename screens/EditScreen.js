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

      

      <Text style={styles.text}>Enter your phone number</Text>
      <TextInput value={phoneNumber} onChangeText={setPhoneNumber} placeholder="Enter your phone number" style={styles.input} keyboardType="phone-pad" />

      <Text style={styles.text}>Enter your location</Text>
      <TextInput value={location} onChangeText={setLocation} placeholder="Enter your location" style={styles.input} />

      <Text style={styles.text}>Enter your password</Text>
      <TextInput value={password} onChangeText={setPassword} placeholder="Enter your password" style={styles.input} secureTextEntry />


      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      
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
    paddingTop: 20,        // було 30
    paddingBottom: 30,     // було 40
  },
  input: {
    borderWidth: 1,
    borderColor: '#6E4B23',
    paddingVertical: 10,   // було 12
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 15,          // було 16
    marginBottom: 16,      // було 20
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 17,          // було 18
    marginBottom: 6,       // було 8
  },
  button: {
    backgroundColor: '#72D978',
    borderWidth: 1,
    paddingVertical: 11,   // було 15
    paddingHorizontal: 15,
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
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 5,
    fontSize: 15,
  }
});
