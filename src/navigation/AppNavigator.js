/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

function App() {
 return (
  <NavigationContainer>
   <Stack.Navigator>
    <Stack.Screen name="Home Screen" component={HomeScreen} />
   </Stack.Navigator>
  </NavigationContainer>
 );
}

export default App;
