import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScree';
import {screennames} from '../utils/screennames';

export default function BottomTab({navigation, route}) {
  return (
    <Tab.Navigator
      initialRouteName={screennames.home}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={screennames.home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={screennames.setting}
        component={SettingScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginLeft: 10,
  },
});
