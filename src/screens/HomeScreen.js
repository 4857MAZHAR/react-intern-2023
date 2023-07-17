import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
 const goToSecondScreen = () => {
  navigation.navigate('SecondScreen');
 };

 return (
  <View style={styles.container}>
   <Button title="Go to Second Screen" onPress={goToSecondScreen} />
  </View>
 );
};


const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
 },
});

export default HomeScreen;