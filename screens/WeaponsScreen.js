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

const weapons = [
  {
    screen: 'KnifeScreen',
    image: require('../assets/knife.png'),
    title: 'Knife',
    description:
      'The worst possible solution. Carrying a knife is quite justified, but as a weapon for...',
    rating: 1,
  },
  {
    screen: 'PneumaticScreen',
    image: require('../assets/pneumatic.png'),
    title: 'Pneumatic weapons',
    description:
      'Are a terrible alternative. This type of weapon has a very poor stopping...',
    rating: 1,
  },
  {
    screen: 'FlaubertScreen',
    image: require('../assets/flaubert.png'),
    title: 'Flaubert',
    description:
      'Weapons chambered for Flaubert (or simply Flaubert) are no better either...',
    rating: 1,
  },
  {
    screen: 'TaserScreen',
    image: require('../assets/taser.jpg'),
    title: 'Taser',
    description:
      'Tasers are a fairly mediocre means of self-defense that requires direct physical...',
    rating: 3,
  },
  {
    screen: 'StickScreen',
    image: require('../assets/stick.jpg'),
    title: 'Stick',
    description:
      'Sticks/climbing poles are a very good weapon for self-defense...',
    rating: 4,
  },
  {
    screen: 'YawaraScreen',
    image: require('../assets/yawara2.jpg'),
    title: 'Yawara',
    description:
      'The yawara is a small, handheld stick traditionally used in Japanese martial arts...',
    rating: 3,
  },
  {
    screen: 'PenScreen',
    image: require('../assets/pen.jpg'),
    title: 'Tactical pen',
    description:
      'A tactical pen is a "concealed carry weapon": that is, it is not considered a weapon by law, but it can be used for self-defense',
    rating: 3,
  },
  {
    screen: 'PepperScreen',
    image: require('../assets/pepper1.jpg'),
    title: 'Pepper',
    description:
      'A great option for all age groups. Very easy to use and does not require direct contact with the attacker.',
    rating: 5,
  },
  {
    screen: 'CastetScreen',
    image: require('../assets/castet.jpg'),
    title: 'Brass knuckles',
    description:
      'They are made for everyday wear, but they are very dangerous',
    rating: 1,
  },
];

export default function WeaponsScreen() {
  const navigation = useNavigation();
  const handlePress = (screen) => {
    navigation.navigate(screen);
  };

  const renderStars = (count) => {
    const totalStars = 5;
    let stars = [];
    for (let i = 0; i < totalStars; i++) {
      stars.push(
        <Text
          key={i}
          style={[
            styles.star,
            { color: i < count ? '#FFD700' : '#CCC' }
          ]}
        >
          ★
        </Text>
      );
    }
    return <View style={styles.starsRow}>{stars}</View>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.header}>Weapons</Text>

        {weapons.map(({ screen, image, title, description, rating }) => (
          <TouchableOpacity
            key={screen}
            style={styles.card}
            activeOpacity={0.8}
            onPress={() => handlePress(screen)}
          >
            <Image source={image} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.description}>{description}</Text>
              {renderStars(rating)}
            </View>
            <View style={styles.arrow}>
              <Ionicons name="arrow-forward-outline" size={24} color="#555" />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D9F0DA',
    flex: 1,
  },
  scroll: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 12,
  },
  header: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#1B3A1E',
    marginBottom: 24,
  },
  card: {
    width: '95%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
    paddingRight: 12,
  },
  image: {
    width: 120,
    height: 110,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  cardContent: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0B2E10',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#444',
    marginBottom: 10,
    lineHeight: 20,
  },
  starsRow: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 20,
    marginRight: 2,
  },
  arrow: {
    paddingLeft: 8,
  },
});
