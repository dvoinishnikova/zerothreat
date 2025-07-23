import { useNavigation } from '@react-navigation/native';
import { Text, TextInput, SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function LoginScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePress = () => {

    //navigation.navigate("Profile", { email: email });
    navigation.navigate("HomeScreen", { email: email });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Enter your email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Enter..."
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.text}>Enter your password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter..."
        style={styles.input}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.text}>New?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={styles.linkText}> Sign up</Text>
      </TouchableOpacity>

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    // backgroundColor: '#F3DEBD',
    backgroundColor: '#A9DDAD',
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
    fontFamily: "Stardos Stencil",
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
