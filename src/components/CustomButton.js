import React from 'react';
import { TouchableOpacity, Text, StyleSheet,Dimensions } from 'react-native';
import colors from '../utils/colors';



// Get the screen width using Dimensions
const screenWidth = Dimensions.get('window').width;

const CustomButton = ({ title, onPress, style,textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button,style]} onPress={onPress}>
      <Text style={[styles.buttonText,textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary, // Customize button background color as needed
    padding: screenWidth*0.02,
    borderRadius: screenWidth*0.10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center',
    borderWidth:2,
    borderColor:colors.orange,
  },
  buttonText: {
    color: colors.darkGreen, // Customize button text color as needed
  },
});

export default CustomButton;
