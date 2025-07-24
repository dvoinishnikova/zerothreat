//import * as React from 'react';
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
import { useRoute } from '@react-navigation/native';
// Екрани
import HomeScreen from './screens/HomeScreen';
//import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import AboutScreen from './screens/AboutScreen';
import WeaponsScreen from './screens/WeaponsScreen';
import GuidesScreen from './screens/GuidesScreen';
import LawsScreen from './screens/LawsScreen';
import AccountScreen from './screens/AccountScreen';
import ContactsScreen from './screens/ContactsScreen';
import PneumaticScreen from './screens/PneumaticScreen';
import KnifeScreen from './screens/KnifeScreen';
import FlaubertScreen from './screens/FlaubertScreen';
import TaserScreen from './screens/TaserScreen';
import StickScreen from './screens/StickScreen';
import YawaraScreen from './screens/YawaraScreen';
import PenScreen from './screens/PenScreen';
import CastetScreen from './screens/CastetScreen';
import PepperScreen from './screens/PepperScreen';
import EditScreen from './screens/EditScreen';
import TraumaticScreen from './screens/TraumaticScreen';

import Guide0Screen from './screens/Guide0Screen';
import Guide1Screen from './screens/Guide1Screen';
import Guide2Screen from './screens/Guide2Screen';
import Guide3Screen from './screens/Guide3Screen';
import Guide4Screen from './screens/Guide4Screen';
import Guide5Screen from './screens/Guide5Screen';
import Guide6Screen from './screens/Guide6Screen';
import Guide7Screen from './screens/Guide7Screen';
import Guide8Screen from './screens/Guide8Screen';

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
      {/*2 <Tab.Screen
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
      /> */}
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
      <Stack.Navigator initialRouteName='LoginScreen' >
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="WeaponsScreen" component={WeaponsScreen} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
        <Stack.Screen name="GuidesScreen" component={GuidesScreen} />
        <Stack.Screen name="LawsScreen" component={LawsScreen} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
        <Stack.Screen name="ContactsScreen" component={ContactsScreen} />
        <Stack.Screen name="PneumaticScreen" component={PneumaticScreen} />
        <Stack.Screen name="KnifeScreen" component={KnifeScreen} />
        <Stack.Screen name="FlaubertScreen" component={FlaubertScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="TaserScreen" component={TaserScreen} />
        <Stack.Screen name="StickScreen" component={StickScreen} />
        <Stack.Screen name="YawaraScreen" component={YawaraScreen} />
        <Stack.Screen name="PenScreen" component={PenScreen} />
        <Stack.Screen name="CastetScreen" component={CastetScreen} />
        <Stack.Screen name="PepperScreen" component={PepperScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="EditScreen" component={EditScreen} />
        <Stack.Screen name="TraumaticScreen" component={TraumaticScreen} />

        <Stack.Screen name="Guide0Screen" component={Guide0Screen} />
        <Stack.Screen name="Guide1Screen" component={Guide1Screen} />
        <Stack.Screen name="Guide2Screen" component={Guide2Screen} />
        <Stack.Screen name="Guide3Screen" component={Guide3Screen} />
        <Stack.Screen name="Guide4Screen" component={Guide4Screen} />
        <Stack.Screen name="Guide5Screen" component={Guide5Screen} />
        <Stack.Screen name="Guide6Screen" component={Guide6Screen} />
        <Stack.Screen name="Guide7Screen" component={Guide7Screen} />
        <Stack.Screen name="Guide8Screen" component={Guide8Screen} />
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
    flex: 1,
  },
  tabIcon: (focused) => ({
    width: 24,
    height: 24,
    tintColor: focused ? 'navy' : 'gray',
  }),
});

export default App;
