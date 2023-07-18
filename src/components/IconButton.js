import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


const IconButton = ({ text, onPress }) => {
 return (
  <TouchableOpacity style={styles.container} onPress={onPress}>
   <Image
    style={styles.img}
    source={require("../assets/google.png")} />
   <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
 );
};

const styles = StyleSheet.create({
 container: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: 'white',
  borderRadius: 4,
  paddingHorizontal: 10,
  paddingVertical: 8,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  elevation: 2,
  marginTop: 30,
 },
 text: {
  marginLeft: 8,
  color: 'gray',
  fontWeight: 'bold',
  marginLeft: 15
 },
 img: {
  width: 15,
  height: 15
 }
});


export default IconButton;