import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../utils/colors';

const CustomText = ({text, style}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, style]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.darkGreen,
  },
});

export default CustomText;
