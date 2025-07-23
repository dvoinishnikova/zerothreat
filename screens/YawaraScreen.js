import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Switch, } from 'react-native';


export default function YawaraScreen() {
    
    
 return (
   <SafeAreaView style={styles.container}>
   <ScrollView>
   <Image
               source={require('../assets/yawara2.jpg')}
               style={styles.img}
             />
   <Text style={styles.text}>
      Yawara: a small, handheld stick traditionally used in Japanese martial arts. Typically 5–7 inches long, it is gripped in the fist with ends protruding on either side. It can be used to strike pressure points, apply joint locks, or enhance punches. Compact and easy to carry, the yawara is a practical tool for self-defense, offering increased control and force without causing permanent harm.But this is a rather mediocre option that is only good for those who already have a well-developed striking technique and serves to increase the force of the strike.
     </Text>

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


