import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Switch, } from 'react-native';

export default function WeaponsScreen() {
 return (
   <SafeAreaView style={styles.container}>
     <View style={styles.square}>
    </View>
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


