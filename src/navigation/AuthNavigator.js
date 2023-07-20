import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../screens/SignupForm';
import Login from '../screens/Login';
import ForgetPassword from '../screens/ForgetPassword';
import TabNavigator from './TabNavigator';
import Screen from '../utils/ScreenNames';




const AuthNavigator = () => {
  const Stack = createNativeStackNavigator(); 
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name={Screen.SIGN_UP} component={Signup} />
      <Stack.Screen name={Screen.LOGIN} component={Login}  />
      <Stack.Screen name={Screen.FORGET_PASSWORD} component={ForgetPassword}  />
    </Stack.Navigator>
  );
};

export default AuthNavigator;