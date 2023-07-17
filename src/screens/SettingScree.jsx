import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CustomTextButton from '../components/CustomTextButton';
import {colors} from '../utils/colors';

export default function SettingScreen({navigation, route}) {
  return (
    <View style={styles.mncontainer}>
      <Text>SettingsScreen</Text>
      <CustomTextButton
        buttonfunction={() => navigation.navigate('onBoardScreen')}
        text={'LogOut'}
        buttonstyle={styles.btnstyle}
        btntextstyle={styles.tetxtstyle}
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
  },
  tetxtstyle: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'capitalize',
  },
});
