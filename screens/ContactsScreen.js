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