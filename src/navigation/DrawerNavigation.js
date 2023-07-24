import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import BottomTab from './BottomTab';
import CustomDrawer from './CustomDrawer';
import { screennames } from '../utils/screennames';

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={() => <CustomDrawer />}
      screenOptions={{ headerShown: false, title: null }}>
      <Drawer.Screen name={screennames.drawerhome} component={BottomTab} />
    </Drawer.Navigator>
  );
}
