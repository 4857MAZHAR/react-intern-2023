// import React from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import colors from "../utils/colors";



// const ActionText = ({ text, onPress, style,TextStyle }) => {
//   return (
//     <TouchableOpacity  style={[styles.container,style]}onPress={onPress}>
//       <Text style={[styles.text, TextStyle]}>{text}</Text>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//     container:{
//         alignItems:'center',
// justifyContent:'center',
// backgroundColor:'red'

//     },
//   text: {
//     color: colors.darkGreen,
//     textDecorationLine: "underline",
//     //fontSize: 16,
//   },
// });

// export default ActionText;
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

