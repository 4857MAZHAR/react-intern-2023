import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Details from '../screens/Details';




const HomeStackNavigator = () => {
  const Stack = createNativeStackNavigator(); 
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details}  />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;