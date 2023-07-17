import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SecondScreen = () => {
 return (
  <View style={styles.container}>
   <Text style={styles.text}>This is the Second Screen</Text>
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
  fontSize: 24,
  color: "#000000"
 },
});

export default SecondScreen;