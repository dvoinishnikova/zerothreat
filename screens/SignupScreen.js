import { useNavigation } from '@react-navigation/native';
import { Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function LoginScreen() {
  const navigation = useNavigation();

  // Створюємо стани для кожного поля
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");          // Новий стан для імені
  const [phoneNumber, setPhoneNumber] = useState(""); // Новий стан для номера телефону
  const [location, setLocation] = useState("");  // Новий стан для локації

  const handlePress = () => {
    // Виконуємо перехід, передаючи дані
    navigation.navigate("HomeScreen", { email: email, name: name, phoneNumber: phoneNumber, location: location });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Поле для введення імені */}
      <Text style={styles.text}>Enter your name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
        style={styles.input}
      />

      {/* Поле для введення email */}
      <Text style={styles.text}>Enter your email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Поле для введення паролю */}
      <Text style={styles.text}>Enter your password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        style={styles.input}
        secureTextEntry
      />

      {/* Поле для введення номера телефону */}
      <Text style={styles.text}>Enter your phone number</Text>
      <TextInput
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Enter your phone number"
        style={styles.input}
        keyboardType="phone-pad"
      />

      {/* Поле для введення локації */}
      <Text style={styles.text}>Enter your location</Text>
      <TextInput
        value={location}
        onChangeText={setLocation}
        placeholder="Enter your location"
        style={styles.input}
      />

      {/* Кнопка логіну */}
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      <Text style={styles.text}>Not new?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.linkText}>Log in</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F3DEBD',
  },
  input: {
    borderWidth: 1,
    borderColor: '#6E4B23',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#E5CCAE',
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#D9AA73',
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: 'black',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold'
  }
});
