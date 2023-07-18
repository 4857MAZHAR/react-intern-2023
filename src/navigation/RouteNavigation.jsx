import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgotPassword from '../screens/ForgotPassword';
import DrawerNavigation from './DrawerNavigation';
import {screennames} from '../utils/screennames';

export default function RouteNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={screennames.signup}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={screennames.signup} component={SignupScreen} />
        <Stack.Screen name={screennames.login} component={LoginScreen} />
        <Stack.Screen
          name={screennames.forgotpass}
          component={ForgotPassword}
        />
        <Stack.Screen
          name={screennames.authenticatedsucess}
          component={DrawerNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
