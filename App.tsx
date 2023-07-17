import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import HomeNavigation from './src/navigation/HomeNavigation';

function App() {
const Stack = createNativeStackNavigator();
  return (
  <NavigationContainer>
     <HomeNavigation />
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});
export default App
