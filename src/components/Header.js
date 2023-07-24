import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../utils/theme/colors/colors';

const Header = ({
  containerStyle,
  title,
  leftComponent,
  rightComponent,
  titleStyle,
}) => {
  return (
    <View style={{...styles.container, ...containerStyle}}>
      {/* LEFT */}
      {leftComponent}

      {/* Title */}
      <View style={{...styles.titleContainer}}>
        <Text style={{...styles.titleText, ...titleStyle}}>{title}</Text>
      </View>
      {/* Right */}
      {rightComponent}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 18,
    color: colors.black,
    marginLeft: 20,
  },
});

export default Header;
