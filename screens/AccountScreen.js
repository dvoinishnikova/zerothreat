import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function AccountScreen() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('@user_data');
        if (storedData) {
          setUserData(JSON.parse(storedData));
        }
      } catch (e) {
        console.error("Failed to load user data:", e);
      } finally {
        setLoading(false);
      }
    };
    loadUserData();
  }, []);

  const handleLogout = async () => {
    try {
      Alert.alert("Logged out", "You have been logged out successfully.");
      navigation.reset({
        index: 0,
        routes: [{ name: 'LoginScreen' }],
      });
    } catch (e) {
      console.error("Failed to logout:", e);
      Alert.alert("Error", "Failed to logout. Try again.");
    }
  };

  const handleEdit = () => {
    
    navigation.navigate('EditScreen', { userData });
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color="#72D978" />
      </View>
    );
  }

  if (!userData) {
    return (
      <View style={[styles.container, styles.center]}>
        <Text style={styles.errorText}>User data not found. Please log in or sign up.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Profile</Text>

      <Image
        source={{ uri: 'https://i.pravatar.cc/150?img=13' }}
        style={styles.avatar}
      />

      <View style={styles.infoBox}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{userData.name}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{userData.email}</Text>

        <Text style={styles.label}>Phone Number:</Text>
        <Text style={styles.value}>{userData.phoneNumber}</Text>

        <Text style={styles.label}>Location:</Text>
        <Text style={styles.value}>{userData.location}</Text>
      </View>

      <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C3F9C7',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 30,
  },
  infoBox: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 10,
    fontWeight: '500',
  },
  value: {
    fontSize: 18,
    color: '#111827',
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#72D978',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',

    borderWidth: 1,
    borderColor: '#003604',
    
  },
  logoutButton: {
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: '#003604',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});
