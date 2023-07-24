import {StyleSheet} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

//screens

import {screennames} from '../utils/screennames';
import {colors} from '../utils/theme/colors/colors';
import DashboardScreen from '../screens/BottomScreens/DashBoardScreen';
import InvoiceScreen from '../screens/BottomScreens/InvoiceScreen';
import ReceiptsScreen from '../screens/BottomScreens/ReceiptsScreen';
import CheckInScreen from '../screens/BottomScreens/CheckInScreen';
import ForYouScreen from '../screens/BottomScreens/ForYouScreen';

import DashboardIcon from '../assets/icons/DashboardIcon.js';
import InvoiceIcon from '../assets/icons/InvoicesIcon';
import ReceiptIcon from '../assets/icons/ReceiptIcon';
import CheckInIcon from '../assets/icons/CheckInIcon';
import ForYouIcon from '../assets/icons/ForYouIcon';

export default function BottomTab({navigation, route}) {
  return (
    <Tab.Navigator
      initialRouteName={screennames.dashboard}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.orangePrimary,
        tabBarInactiveTintColor: colors.darkGray,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIconStyle: styles.tabBarIcon,
      }}>
      <Tab.Screen
        name={screennames.dashboard}
        component={DashboardScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <DashboardIcon width={20} height={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={screennames.invoices}
        component={InvoiceScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <InvoiceIcon width={23} height={23} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={screennames.receipts}
        component={ReceiptsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <ReceiptIcon width={24} height={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={screennames.checkIn}
        component={CheckInScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <CheckInIcon width={24} height={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={screennames.forYou}
        component={ForYouScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <ForYouIcon width={24} height={24} color={color} />
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
  tabBar: {
    height: 60,
    padding: 10,
  },
  tabBarLabel: {
    paddingBottom: 5,
  },
});
