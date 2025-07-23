import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Switch, } from 'react-native';


export default function PepperScreen() {
    
    
 return (
   <SafeAreaView style={styles.container}>
   <ScrollView>
   <Image
               source={require('../assets/pepper1.jpg')}
               style={styles.img}
             />
   <Text style={styles.text}>
      A great option for all age groups. Very easy to use and does not require direct contact with the attacker.

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
    height: 200,
    // resizeMode: 'cover',
    borderRadius: 4,
    marginTop : 50,
    marginBottom : 20 ,
    alignSelf: 'center'
    

  },

});


