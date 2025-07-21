import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Switch, } from 'react-native';

export default function ProfileScreen() {
 return (
   <SafeAreaView style={styles.container}>
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


