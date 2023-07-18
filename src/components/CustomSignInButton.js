import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomSignInButton = ({ onPress, text, nextLineText }) => {
 return (
  <TouchableOpacity style={styles.button} onPress={onPress}>
   <Text style={styles.buttonText}>{text} {"\n"} {nextLineText} </Text>
  </TouchableOpacity>
 );
};

const styles = StyleSheet.create({
 button: {
  backgroundColor: '#FDC6B1',
  borderRadius: 30,
  borderWidth: 1,
  borderColor: '#DC7B51',
  paddingVertical: 10,
  paddingHorizontal: 20,
  marginVertical: 10,
  marginTop: 30,
  alignItems: 'center',
 },
 buttonText: {
  fontSize: 16,
  fontWeight: 'bold',
  color: 'black',
  textAlign: 'center'
 },
});

export default CustomSignInButton;
