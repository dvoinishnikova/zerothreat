import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function AccountScreen() {
  const route = useRoute();
  const { email, name } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Info</Text>
      <Text style={styles.info}>Email: {email}</Text>
      <Text style={styles.info}>Name: {name}</Text>
      {/* <Text style={styles.info}>Name: {name}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F3DEBD',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
});
