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
import ForgotPassword from "../screens/Authentication/ForgotPassword";
import { SCREEN_NAME } from "../utils/Const";

const Stack = createNativeStackNavigator();

function Route() {
 return (
  <NavigationContainer>
   <Stack.Navigator>
    <Stack.Screen name={SCREEN_NAME.SignUp} component={SignUp} options={{ headerShown: false }} />
    <Stack.Screen name={SCREEN_NAME.Login} component={Login} options={{ headerShown: false }} />
    <Stack.Screen name={SCREEN_NAME.ForgotPassword} component={ForgotPassword} options={{ headerShown: false }} />
   </Stack.Navigator>
  </NavigationContainer>
 );
}

export default Route;
