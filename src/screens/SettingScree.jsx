import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {colors} from '../utils/colors';
import {screennames} from '../utils/screennames';
import DynamicButton from '../components/DynamicButton';

export default function SettingScreen({navigation, route}) {
  return (
    <View style={styles.mncontainer}>
      <Text>SettingsScreen</Text>
      <DynamicButton
        btnfunction={() => navigation.navigate(screennames.signup)}
        text={'LogOut'}
        btnstyle={styles.btnstyle}
        textstyle={styles.tetxtstyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mncontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnstyle: {
    marginTop: 10,
    backgroundColor: colors.black,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    width: '20%',
  },
  tetxtstyle: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'capitalize',
  },
});
