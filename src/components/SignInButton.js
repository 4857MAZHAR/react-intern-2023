import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from "../utils";

const CustomSignInButton = ({ onPress, text, nextLineText }) => {

 return (
  <TouchableOpacity style={styles.button} onPress={onPress}>
   <Text style={styles.buttonText}>{nextLineText ? text + "\n" + nextLineText : text} </Text>
  </TouchableOpacity>
 );
};

const styles = StyleSheet.create({
 button: {
  backgroundColor: COLORS.buttonBackgroundPrimary,
  borderRadius: 30,
  borderWidth: 1,
  borderColor: COLORS.buttonBorderPrimary,
  paddingVertical: 10,
  paddingHorizontal: 20,
  minWidth: "50%",
  marginVertical: 10,
  marginTop: 30,
  alignItems: 'center',
 },
 buttonText: {
  fontSize: 20,
  color: COLORS.black,
  textAlign: 'center'
 },
});

export default CustomSignInButton;
