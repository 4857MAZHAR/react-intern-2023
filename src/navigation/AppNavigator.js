import React,{useContext} from 'react';

//import navigations
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from '../navigation/AuthNavigator';
import Tab from '../navigation/TabNavigator';

//import auth context
import { AuthContext } from '../context/AuthContext';




const AppNavigator = () => {
  const {isLoggedIn}=useContext(AuthContext);
 
  const Stack = createNativeStackNavigator(); 

  if(!isLoggedIn)
  {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="Auth" component={Auth} />
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