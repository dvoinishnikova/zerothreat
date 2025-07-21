import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Switch, } from 'react-native';

export default function AboutScreen() {
 return (
   <SafeAreaView style={styles.container}>
   <ScrollView>
   <Text style={styles.header}>
       Self-defense is something that is very underestimated in our society. The problem of attacks on people, for the purpose of robbery or simply the desire of the attacker to show his superiority, is still very popular. Our team is interested in providing information on effective self-defense so that you do not have problems with attackers, as well as problems with the law later.
Many people mistakenly think that if the activity of the police and municipal security is quite high in a settlement, there is no need to learn self-defense, because it will never be needed. But it is enough to have just one such case - and the consequences can be very bad. As they say, it is better to have a weapon and not need it than to need it and not have it. These skills may never have to be used in real life, but having them will definitely not be superfluous.
There is also a misconception that if you have some means of self-defense with you, then safety is guaranteed. But this is not so. In a real situation, there may often be no time for a considered reaction, so our goal is also to provide you with knowledge about how to behave in a dangerous situation and how to avoid conflict (after all, the best fight is the one that doesn't happen).
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
   fontSize: 19,
   fontWeight: 'regular',
 },
});


