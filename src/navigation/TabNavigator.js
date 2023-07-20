import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from '../screens/Dashboard'
import Expenses from '../screens/Expenses'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Invoices from '../screens/Invoices';
import JobTracking from '../screens/JobTracking';
import ForYou from '../screens/ForYou';
import Screen from '../utils/ScreenNames';



const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen
      name={Screen.DASHBOARD}
      component={Dashboard}
      options={{
        tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-dashboard" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name={Screen.EXPENSES}
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
      name={Screen.INVOICE}
      component={Invoices}
      options={({ navigation }) => ({
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            color={color}
            name="text-box-outline"
            size={size}
          />
        ),
      })}
    />
    <Tab.Screen
      name={Screen.JOB_TRACKING}
      component={JobTracking}
      options={({ navigation }) => ({
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            color={color}
            name="map-marker-outline"
            size={size}
          />
        ),
      })}
    />
    <Tab.Screen
      name={Screen.FOR_YOU}
      component={ForYou}
      options={({ navigation }) => ({
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            color={color}
            name="dots-horizontal"
            size={size}
          />
        ),
      })}
    />
    </Tab.Navigator>
  )
}

export default TabNavigator
