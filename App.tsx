import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import HomeNavigation from './src/navigation/HomeNavigation';
import AppNavigator from './src/navigation/AppNavigator';
import SignupForm from './src/screens/SignupForm';
import Login from './src/screens/Login';


function App() {
const Stack = createNativeStackNavigator();
  return (
  // <NavigationContainer>
  //    <AppNavigator />
  // </NavigationContainer>

   //<SignupForm />
   <Login />
  
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
