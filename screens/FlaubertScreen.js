import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Switch, } from 'react-native';


export default function FlaubertScreen() {
    
    
 return (
   <SafeAreaView style={styles.container}>
   <ScrollView>
   <Image
               source={require('../assets/flaubert.png')}
               style={styles.img}
             />
   <Text style={styles.text}>
    Weapons chambered for Flaubert (or simply Flaubert) are no better either. The only thing it has better is a much louder sound of the shot, which can attract people's attention. However, you should never shoot at the attacker, because you will not be able to neutralize him, but at the same time, you can inflict severe injuries on him, which can lead to very bad consequences, both for him and for you.     </Text>

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


