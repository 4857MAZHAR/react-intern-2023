import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';

import {colors} from '../utils/colors';

export default function ProductCard({data}) {
  return (
    <ImageBackground
      source={{uri: data?.image}}
      style={styles.card}></ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 150,
    width: 120,
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: colors.black,
    borderRadius: 5,
  },
});
