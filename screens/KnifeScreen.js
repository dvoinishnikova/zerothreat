import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Switch, } from 'react-native';


export default function KnifeScreen() {
    
    
 return (
   <SafeAreaView style={styles.container}>
   <ScrollView>
   <Image
               source={require('../assets/knife.png')}
               style={styles.img}
             />
   <Text style={styles.text}>
       Knife: The worst possible solution. Carrying a knife is perfectly reasonable, but as a weapon for self-defense it is a terrible solution. First, its use requires skills that not everyone has, especially in an adrenaline-fueled situation. Second, there is a very high probability of causing serious or fatal bodily harm to a person, which will most likely be considered by the court as a violation of the criminal code.
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


