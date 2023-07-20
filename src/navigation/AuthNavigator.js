import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../screens/SignupForm';
import Login from '../screens/Login';
import ForgetPassword from '../screens/ForgetPassword';
import TabNavigator from './TabNavigator';




const AuthNavigator = () => {
  const Stack = createNativeStackNavigator(); 
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login}  />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword}  />
      <Stack.Screen name="TabNavigator" component={TabNavigator}  />
    </Stack.Navigator>
  );
};

export default AuthNavigator;