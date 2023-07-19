import {Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Heading({text = '', textstyle = {}, type = 'h1'}) {
  const types = {
    h1: 28,
    h2: 24,
    h3: 22,
    h4: 18,
    h5: 14,
    h6: 12,
  };
  return (
    <Text style={[textstyle, styles.text, {fontSize: types[type]}]}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
