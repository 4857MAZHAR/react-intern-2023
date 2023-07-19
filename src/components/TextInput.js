import React, { useState } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import EyeIcon from "./Icons/EyeIcon";
import EyeInvisible from "./Icons/EyeInvisible";
import { COLORS } from "../utils";

const CustomTextInput = ({ placeholder, onChangeText, secureTextEntry, eyeVis, error }) => {
 const [isPasswordVisible, setPasswordVisible] = useState(false);
 const [isFocused, setIsFocused] = useState(false);

 const togglePasswordVisibility = () => {
  setPasswordVisible(!isPasswordVisible);
 };

 const handleFocus = () => {
  setIsFocused(true);
 };

 const handleBlur = () => {
  setIsFocused(false);
 };

 return (
  <View style={styles.inputContainer}>
   <View style={styles.inputWrapper}>
    <TextInput
     placeholder={placeholder}
     autoCapitalize="none"
     style={[
      styles.input,
      isFocused && styles.inputFocused,
      error && styles.inputError
     ]}
     secureTextEntry={!isPasswordVisible && secureTextEntry}
     onChangeText={onChangeText}
     onFocus={handleFocus}
     onBlur={handleBlur}
     placeholderTextColor="#C9C9E1"
    />
    {eyeVis && secureTextEntry && (
     <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer}>
      {isPasswordVisible ? <EyeInvisible width={30} height={30} /> : <EyeIcon width={30} height={30} />}
     </TouchableOpacity>
    )}
   </View>
   {error && <Text style={styles.errorText}>{error}</Text>}
  </View>
 );
};

const styles = StyleSheet.create({
 inputContainer: {

 },
 inputWrapper: {
  flexDirection: 'row',
  alignItems: 'center',
 },
 input: {
  marginTop: 8,
  flex: 1,
  height: 50,
  backgroundColor: COLORS.white,
  borderColor: COLORS.inputBorderGray,
  borderWidth: 2,
  marginBottom: 10,
  color: COLORS.black,
  paddingHorizontal: 10,
  borderRadius: 5,
  fontSize: 18
 },
 inputFocused: {
  borderColor: COLORS.black,
 },
 inputError: {
  borderColor: COLORS.red,
 },
 iconContainer: {
  position: 'absolute',
  right: 10,
 },
 errorText: {
  color: COLORS.red,
  fontSize: 10
 },
});

export default CustomTextInput;