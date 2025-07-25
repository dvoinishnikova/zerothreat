import { useNavigation } from '@react-navigation/native';
import { Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import React, { useContext } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {

  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePress = async () => {
    try {
      const storedData = await AsyncStorage.getItem('@user_data');
      if (storedData !== null) {
        const user = JSON.parse(storedData);

        if (user.email === email && user.password === password) {
          navigation.navigate("HomeScreen", user);
        } else {
          Alert.alert("❌ Incorrect email or password");
        }
      } else {
        Alert.alert("⚠️ No user data found. Please sign up.");
      }
    } catch (e) {
      console.error("❌ Failed to load user data:", e);
      Alert.alert("❌ Login failed");
    }
  };

  return (
    
      
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Enter your email</Text>
      <TextInput value={email} onChangeText={setEmail} placeholder="Enter..." style={styles.input} keyboardType="email-address" autoCapitalize="none" />

      <Text style={styles.text}>Enter your password</Text>
      <TextInput value={password} onChangeText={setPassword} placeholder="Enter..." style={styles.input} secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.new}>New?</Text>
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
    backgroundColor: '#C3F9C7',
  },
  input: {
    borderWidth: 1,
    borderColor: '#6E4B23',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
    width: '90%',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#72D978',
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: '#003604',
    alignSelf: 'center',
    width: '90%',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  linkText: {
    color: 'black',
    textDecorationLine: 'underline',
    marginTop: 5,
    fontSize: 15,
    width: '92%',
    alignSelf: 'center',
  },
  new: {
    marginTop: 10,
    fontSize: 18,
    marginBottom: 8,
    width: '90%',
    alignSelf: 'center',
  },
});
