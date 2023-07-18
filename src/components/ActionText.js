import React from 'react';
import { TouchableOpacity, Text, StyleSheet,Dimensions } from 'react-native';
import colors from '../utils/colors';



// Get the screen width using Dimensions
const screenWidth = Dimensions.get('window').width;

const ActionText = ({ text, onPress, style,textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button,style]} onPress={onPress}>
      <Text style={[styles.buttonText,textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
   
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center',
   
  },
  buttonText: {
    color: colors.darkGreen, // Customize button text color as needed
    textDecorationLine: "underline",
  },
});

export default ActionText;

