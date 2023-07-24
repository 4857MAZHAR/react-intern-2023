import React from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native'; // Import Platform
import { colors } from '../utils/theme/colors/colors';

const Header = ({
  containerStyle,
  title,
  leftComponent,
  rightComponent,
  titleStyle,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        ...containerStyle,
        ...Platform.select({
          ios: styles.shadowIOS, // Apply shadow on iOS
          android: styles.shadowAndroid, // Apply shadow on Android
        }),
      }}
    >
      {/* LEFT */}
      {leftComponent}

      {/* Title */}
      <View style={{ ...styles.titleContainer }}>
        <Text style={{ ...styles.titleText, ...titleStyle }}>{title}</Text>
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
  // Shadow styles for iOS
  shadowIOS: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  // Shadow styles for Android
  shadowAndroid: {
    elevation: 5,
  },
});

export default Header;
