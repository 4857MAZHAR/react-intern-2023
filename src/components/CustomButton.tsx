import React from 'react';
import { TouchableOpacity, Text, StyleSheet,Dimensions } from 'react-native';
import colors from '../utils/colors';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

// Get the screen width using Dimensions
const screenWidth = Dimensions.get('window').width;

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary, // Customize button background color as needed
    padding: screenWidth*0.05,
    borderRadius: screenWidth*0.10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center',
    borderWidth:2,
    borderColor:colors.orange,
  },
  buttonText: {
    color: colors.black, // Customize button text color as needed
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
