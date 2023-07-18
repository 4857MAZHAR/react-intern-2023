/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUp from '../screens/Authentication/SignUp';
import Login from "../screens/Authentication/Login";

const Stack = createNativeStackNavigator();

function App() {
 return (
  <NavigationContainer>
   <Stack.Navigator>
    <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
   </Stack.Navigator>
  </NavigationContainer>
 );
}

export default App;
