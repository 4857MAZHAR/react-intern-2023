import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomTextButton({
  buttonstyle,
  btntextstyle,
  buttonfunction,
  text,
}) {
  return (
    <TouchableOpacity onPress={buttonfunction} style={buttonstyle}>
      <Text style={btntextstyle}>{text}</Text>
    </TouchableOpacity>
  );
}
