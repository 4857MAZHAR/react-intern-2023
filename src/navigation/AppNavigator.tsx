import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from '../screens/Dashboard'
import Expenses from '../screens/Expenses'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Invoices from '../screens/Invoices';
import JobTracking from '../screens/JobTracking';
import ForYou from '../screens/ForYou';



const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-dashboard" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Expenses"
      component={Expenses}
      options={({ navigation }) => ({
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            color={color}
            name="file-document-outline"
            size={size}
          />
        ),
      })}
    />
    <Tab.Screen
      name="Invoices"
      component={Invoices}
      options={({ navigation }) => ({
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            color={color}
            name="plus-circle"
            size={size}
          />
        ),
      })}
    />
    <Tab.Screen
      name="Job Tracking"
      component={JobTracking}
      options={({ navigation }) => ({
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            color={color}
            name="plus-circle"
            size={size}
          />
        ),
      })}
    />
    <Tab.Screen
      name="For You"
      component={ForYou}
      options={({ navigation }) => ({
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            color={color}
            name="plus-circle"
            size={size}
          />
        ),
      })}
    />
    </Tab.Navigator>
  )
}

export default AppNavigator
