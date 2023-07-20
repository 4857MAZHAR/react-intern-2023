import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from '../navigation/AuthNavigator';
import Tab from '../navigation/TabNavigator';




const AppNavigator = () => {
  const isLoggedIn=true;
  const Stack = createNativeStackNavigator(); 

  if(!isLoggedIn)
  {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="Auth" component={Auth} />
      {/* <Stack.Screen name="Tab" component={Tab}  /> */}
    </Stack.Navigator>
  );
  }
  return(
    <Stack.Navigator screenOptions={{headerShown:false}} >
    <Stack.Screen name="Tab" component={Tab}  />
  </Stack.Navigator>
  );
};

export default AppNavigator;