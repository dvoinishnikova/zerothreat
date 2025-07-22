import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Switch, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TasersScreen() {
    const navigation = useNavigation();
 return (
   <SafeAreaView style={styles.container}>
   <ScrollView>
   <Image
               source={require('../assets/taser.jpg')}
               style={styles.img}
             />
   <Text style={styles.text}>
Tasers are a fairly mediocre means of self-defense that requires direct physical contact with the opponent, so it is best used with sufficient training and good fighting skills. They also work well for scaring away street dogs.     </Text>

   </ScrollView>
     
   </SafeAreaView>
 );
}

const styles = StyleSheet.create({
 container: {
   alignItems: 'center',
   backgroundColor: '#F3DEBD',
   height: '100%',
   justifyContent: 'center',
},
text: {
   fontSize: 21,
   fontWeight: 'regular',
   maxWidth: 370,
    paddingHorizontal: 20,
 },
 img: {
    width: 300,
    height: 152,
    // resizeMode: 'cover',
    borderRadius: 4,
    marginTop : 50,
    marginBottom : 20 ,
    alignSelf: 'center'
    

  },

});


