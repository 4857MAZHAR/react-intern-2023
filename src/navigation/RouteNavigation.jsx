import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import BoardingScreen from '../screens/BoardingScreen';
import BottomTab from './BottomTab';
import {screennames} from '../utils/screennames';

export default function RouteNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={screennames.onboarding}
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={screennames.onboarding}
          component={BoardingScreen}
        />
        <Stack.Screen
          name={screennames.authenticatedsucess}
          component={BottomTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
