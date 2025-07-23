import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Switch, } from 'react-native';


export default function CastetScreen() {
    
    
 return (
   <SafeAreaView style={styles.container}>
   <ScrollView>
   <Image
               source={require('../assets/castet.jpg')}
               style={styles.img}
             />
   <Text style={styles.text}>
      They are made for everyday wear, but they are very dangerous for the enemy, and you will have serious problems with the law (because during examination they are almost 100% identified as cold weapons, which is already a criminal offense).

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


