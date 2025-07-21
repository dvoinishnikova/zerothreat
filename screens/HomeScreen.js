import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

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
        onPress={() => handlePress('AboutScreen')}  // Перехід на AboutScreen
      >
        <Text style={styles.buttonText}>About</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('WeaponsScreen')}  // Перехід на WeaponsScreen
      >
        <Text style={styles.buttonText}>Weapons</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('ContactsScreen')}  // Перехід на ContactsScreen
      >
        <Text style={styles.buttonText}>Contacts</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('GuidesScreen')}  // Перехід на GuidesScreen
      >
        <Text style={styles.buttonText}>Guides</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('LawsScreen')}  // Перехід на LawsScreen
      >
        <Text style={styles.buttonText}>Laws</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePress('AccountScreen')}  // Перехід на AccountScreen
      >
        <Text style={styles.buttonText}>Account</Text>
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
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 60,
  },
  button: {
    backgroundColor: '#D9AA73',
    borderWidth: 2,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: '#6E4B23',
    width: 300,
    marginBottom: 20, // Відступ між кнопками
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'StardosStencil-Regular',
  },
});
