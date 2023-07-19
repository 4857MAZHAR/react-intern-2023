import {View, StyleSheet} from 'react-native';
import React from 'react';

import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';
import {screennames} from '../utils/screennames';

export default function CustomDrawer(props) {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.drawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <Feather name="home" size={size} color={color} />
            )}
            label="Home"
            onPress={() => {
              navigation.navigate(screennames.home);
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Feather name="settings" size={size} color={color} />
            )}
            label="Settings"
            onPress={() => {
              navigation.navigate(screennames.setting);
            }}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
