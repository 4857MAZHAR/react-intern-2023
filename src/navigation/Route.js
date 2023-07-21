import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

//screens
import SignupScreen from '../screens/auth/SignupScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import ForgotPassword from '../screens/auth/ForgotPassword';
import DrawerNavigation from './DrawerNavigation';
import {screennames} from '../utils/screennames';

export default function Route() {
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
