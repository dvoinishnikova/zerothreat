import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen({ route, navigation }) {
  const { name } = route.params;

  const handlePress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.greeting}>Hello, {name}</Text>

      <MenuButton
        title="About"
        iconName="information-circle-outline"
        iconLib="Ionicons"
        onPress={() => handlePress('AboutScreen')}
      />
      <MenuButton
        title="Weapons"
        iconName="pistol"
        iconLib="MaterialCommunityIcons"
        onPress={() => handlePress('WeaponsScreen')}
      />
      
      <MenuButton
        title="Guides"
        iconName="school-outline"
        iconLib="Ionicons"
        onPress={() => handlePress('GuidesScreen')}
      />
      <MenuButton
        title="Laws"
        iconName="document-text-outline"
        iconLib="Ionicons"
        onPress={() => handlePress('LawsScreen')}
      />
      <MenuButton
        title="Contacts"
        iconName="chatbubbles-outline"
        iconLib="Ionicons"
        onPress={() => handlePress('ContactsScreen')}
      />
      <MenuButton
        title="Account"
        iconName="person-outline"
        iconLib="Ionicons"
        //onPress={() => navigation.navigate('AccountScreen', { email })}
        onPress={() => navigation.navigate('AccountScreen')}
      />
    </SafeAreaView>
  );
}

function MenuButton({ title, iconName, iconLib = 'Ionicons', onPress }) {
  const IconComponent =
    iconLib === 'MaterialCommunityIcons' ? MaterialCommunityIcons : Ionicons;

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.buttonContent}>
        <Text style={styles.buttonText}>{title}</Text>
        <IconComponent name={iconName} size={24} color="#003604" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#C3F9C7',
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 60,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#72D978',
    borderWidth: 1,
    borderColor: '#003604',
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginBottom: 18,
    width: 300,
    alignSelf: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'StardosStencil-Regular',
    fontSize: 16,
  },
});