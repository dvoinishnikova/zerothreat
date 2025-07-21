import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Switch,
  Alert,
  TextInput
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Екрани
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import AboutScreen from './screens/AboutScreen';
import WeaponsScreen from './screens/WeaponsScreen';
import GuidesScreen from './screens/GuidesScreen';
import LawsScreen from './screens/LawsScreen';
import AccountScreen from './screens/AccountScreen';
import ContactsScreen from './screens/ContactsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: styles.tabLabel,
      }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused }) => {
          if (route.name === 'About') {
            return (
              <Image
                source={require('./assets/about.png')}
                style={styles.tabIcon(focused)}
              />
            );
          } else if (route.name === 'Weapons') {
            return (
              <Image
                source={require('./assets/weapon-icon.png')}
                style={styles.tabIcon(focused)}
              />
            );
          } else if (route.name === 'Contacts') {
            return (
              <Image
                source={require('./assets/contacts.png')}
                style={styles.tabIcon(focused)}
              />
            );
          } else if (route.name === 'Guides') {
            return (
              <Image
                source={require('./assets/guides.png')}
                style={styles.tabIcon(focused)}
              />
            );
          } else if (route.name === 'Laws') {
            return (
              <Image
                source={require('./assets/laws.png')}
                style={styles.tabIcon(focused)}
              />
            );
          } else if (route.name === 'Account') {
            return (
              <Image
                source={require('./assets/account.png')}
                style={styles.tabIcon(focused)}
              />
            );
          } else if (route.name === 'Home') {
            const iconName = focused ? 'home' : 'home-outline';
            return <Ionicons name={iconName} size={24} color="navy" />;
          }
        },
      })}
    >
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarStyle: { display: 'none' },
        }}
      />
      <Tab.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          tabBarStyle: { display: 'none' },
        }}
      />
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Weapons" component={WeaponsScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Guides" component={GuidesScreen} />
      <Tab.Screen name="Laws" component={LawsScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="WeaponsScreen" component={WeaponsScreen} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
        <Stack.Screen name="GuidesScreen" component={GuidesScreen} />
        <Stack.Screen name="LawsScreen" component={LawsScreen} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
        <Stack.Screen name="ContactsScreen" component={ContactsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: 12,
    fontFamily: 'Avenir',
    marginBottom: 8,
  },
  tabBar: {
    height: 60,
  },
  tabIcon: (focused) => ({
    width: 24,
    height: 24,
    tintColor: focused ? 'navy' : 'gray',
  }),
});

export default App;
