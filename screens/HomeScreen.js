import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen({ route, navigation }) {
  
  const { email } = route.params;  // Отримуємо email, переданий з LoginScreen
  
  // Обробник натискання кнопки
  const handlePress = (screen) => {
    navigation.navigate(screen);  // Перехід на відповідний екран
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.greeting}>Hello, {email}</Text>

      {/* Кнопки для навігації на різні екрани */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('AboutScreen')}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>About</Text>
          <Image
            source={require('../assets/about.png')}
            style={styles.icon}
          />
        </View>

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('WeaponsScreen')}  // Перехід на WeaponsScreen
      >
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Weapons</Text>
          <Image
            source={require('../assets/weapon-icon.png')}
            style={styles.icon}
          />
        </View>


      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('ContactsScreen')}  // Перехід на ContactsScreen
      >
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Contacts</Text>
          <Image
            source={require('../assets/contacts.png')}
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('GuidesScreen')}  // Перехід на GuidesScreen
      >
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Guides</Text>
          <Image
            source={require('../assets/guides.png')}
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('LawsScreen')}  // Перехід на LawsScreen
      >
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Laws</Text>
          <Image
            source={require('../assets/laws.png')}
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('AccountScreen', { email })}
>
  <View style={styles.buttonContent}>
    <Text style={styles.buttonText}>Account</Text>
    <Image
      source={require('../assets/account.png')}
      style={styles.icon}
    />
  </View>
</TouchableOpacity>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    //backgroundColor: '#F3DEBD',
    backgroundColor: '#C3F9C7',
    
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 60,
  },
  button: {
    //backgroundColor: '#D9AA73',
    backgroundColor: '#72D978',
    borderWidth: 1,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    alignSelf: 'center',
    //borderColor: '#6E4B23',

    borderColor: '#003604',
    width: 300,
    marginBottom: 20, // Відступ між кнопками
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'StardosStencil-Regular',
  },
  icon: {
    width: 27,
    height: 26,
    

  },
  buttonContent: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between', // або 'center' або 'flex-start', залежно від розташування
  width: 130,
},
});
