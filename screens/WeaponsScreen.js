import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function WeaponsScreen() {
  const navigation = useNavigation();
  const handlePress = (screen) => {
    navigation.navigate(screen);  // Перехід на відповідний екран
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
      <Text style={styles.text}>Weapons</Text>

        <TouchableOpacity style={styles.card}
        onPress={() => handlePress('KnifeScreen')}>
          <Image
            source={require('../assets/knife.png')}
            style={styles.image}
          />
          <Text style={styles.title}>Knife</Text>
          <Text style={styles.description}>
            The worst possible solution. Carrying a knife is quite justified,
            but as a weapon for...
          </Text>
          <View style={styles.arrow}>
            <Ionicons name="arrow-forward-outline" size={22} color="black" />
          </View>
        </TouchableOpacity>


        <TouchableOpacity style={styles.card}
        onPress={() => handlePress('PneumaticScreen')}>
          <Image
            source={require('../assets/pneumatic.png')}
            style={styles.image}
          />
          <Text style={styles.title}>Pneumatic weapons</Text>
          <Text style={styles.description}>
            Are a terrible alternative. This type of weapon has a very poor
            stopping...
          </Text>
          <TouchableOpacity style={styles.arrow}>
            <Ionicons name="arrow-forward-outline" size={22} color="black" />
          </TouchableOpacity>
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}
        onPress={() => handlePress('FlaubertScreen')}>
          <Image
            source={require('../assets/flaubert.png')}
            style={styles.image}
          />
          <Text style={styles.title}>Flaubert</Text>
          <Text style={styles.description}>
            Weapons chambered for Flaubert (or simply Flaubert) are no better either...
          </Text>
          <TouchableOpacity style={styles.arrow}>
            <Ionicons name="arrow-forward-outline" size={22} color="black" />
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}
        onPress={() => handlePress('TaserScreen')}>
          <Image
            source={require('../assets/taser.jpg')}
            style={styles.image}
          />
          <Text style={styles.title}>Taser</Text>
          <Text style={styles.description}>
            Tasers are a fairly mediocre means of self-defense that requires direct physical...
          </Text>
          <TouchableOpacity style={styles.arrow}>
            <Ionicons name="arrow-forward-outline" size={22} color="black" />
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}
        onPress={() => handlePress('StickScreen')}>
          <Image
            source={require('../assets/stick.jpg')}
            style={styles.image}
          />
          <Text style={styles.title}>Stick</Text>
          <Text style={styles.description}>
Sticks/climbing poles are a very good weapon for self-defense...          </Text>
          <TouchableOpacity style={styles.arrow}>
            <Ionicons name="arrow-forward-outline" size={22} color="black" />
          </TouchableOpacity>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3DEBD',
    flex: 1,
  },
  scroll: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  card: {
    width: 347,
    backgroundColor: '#E5CCAE',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 152,
    resizeMode: 'cover',
    borderRadius: 4,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
    lineHeight: 18,
  },
  arrow: {
    position: 'absolute',
    bottom: 12,
    right: 12,
  },
  text: {
    fontSize: 40,
    color: '#333',
    marginTop: 0,
    
  }
});
