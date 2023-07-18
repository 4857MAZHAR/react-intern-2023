import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const TextButton = ({ text, onPress }) => {
 return (
  <TouchableOpacity onPress={onPress}>
   <Text style={styles.linkText}>{text}</Text>
  </TouchableOpacity>
 );
};

const styles = StyleSheet.create({
 linkText: {
  textDecorationLine: 'underline', // underline text
  fontSize: 22,
  marginTop: 30,
  color: 'black'
 },
});
export default TextButton;