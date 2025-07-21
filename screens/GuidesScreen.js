import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Switch, } from 'react-native';

export default function GuidesScreen() {
 return (
   <SafeAreaView style={styles.container}>
   <Image>

   </Image>
   
     <Text style={styles.header}>
       {' '}
       This is my second screen!! I am a genius coder!! Yay Navigation!!!{' '}
     </Text>
   </SafeAreaView>
 );
}

const styles = StyleSheet.create({
 container: {
   alignItems: 'center',
   backgroundColor: 'lightblue',
   height: '100%',
justifyContent: 'center',
 },
 header: {
   fontSize: 24,
   fontWeight: 'bold',
 },
});


