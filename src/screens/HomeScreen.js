import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const HomeScreen = () => {
 return (
  <View style={styles.container}>
   <Text style={styles.text}>This is the Home Screen</Text>
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
 },
 text: {
  fontSize: 18,
 },
});

export default HomeScreen;