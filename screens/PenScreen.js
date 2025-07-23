import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Switch, } from 'react-native';


export default function YawaraScreen() {
    
    
 return (
   <SafeAreaView style={styles.container}>
   <ScrollView>
   <Image
               source={require('../assets/pen.jpg')}
               style={styles.img}
             />
   <Text style={styles.text}>
      Tactical pen: a tactical pen is a "concealed carry weapon": that is, it is not considered a weapon by law, but it can be used for self-defense. But this is a rather mediocre option that is only good for those who already have a well-developed striking technique and serves to increase the force of the strike.

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


