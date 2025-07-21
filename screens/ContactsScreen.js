import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Switch, } from 'react-native';

export default function ContactsScreen() {
 return (
   <SafeAreaView style={styles.container}>
     <Text style={styles.header}>
      +38012344534
     </Text>
     <Text style={styles.header}>
      Sdfcmlskvnjfn Street
     </Text>
     <Text style={styles.header}>
      tkghiurghirb@gmail.com
     </Text>
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
 header: {
   fontSize: 24,
   fontWeight: 'bold',
 },
});


