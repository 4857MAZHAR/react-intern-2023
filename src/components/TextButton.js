import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from "../utils";

const TextButton = ({ onPress, text, isSignInButton }) => {
 const buttonStyles = isSignInButton ? styles.signInButton : styles.textButton;
 const TextStyles = isSignInButton ? styles.buttonTextSignIn : styles.textUnderLined;

 return (
  <TouchableOpacity style={[styles.button, buttonStyles]} onPress={onPress}>
   <Text style={[styles.buttonText, TextStyles]}>{text}</Text>
  </TouchableOpacity>
 );
};

const styles = StyleSheet.create({
 button: {
  paddingVertical: 10,
  paddingHorizontal: 20,
  minWidth: "50%",
  marginVertical: 10,
  marginTop: 30,
  alignItems: 'center',
 },
 textButton: {
  fontSize: 22,
  marginTop: 30,
  color: COLORS.black,
 },
 signInButton: {
  borderWidth: 1,
  borderRadius: 30,
  color: COLORS.black,
  backgroundColor: COLORS.buttonBackgroundPrimary,
  borderColor: COLORS.buttonBorderPrimary,
 },
 buttonText: {
  fontSize: 20,
  color: COLORS.black,
  textAlign: 'center',
 },
 buttonTextSignIn: {
  color: COLORS.black,
 },
 textUnderLined: {
  textDecorationLine: 'underline',
 }
});

export default TextButton;
