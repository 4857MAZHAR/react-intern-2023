import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../utils/colors";

interface ActionTextProps {
  text: string;
  onPress: () => void;
  style?: any;
}

const ActionText: React.FC<ActionTextProps> = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity  style={styles.container}onPress={onPress}>
      <Text style={[styles.text, style]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
justifyContent:'center',flex:1,

    },
  text: {
    color: colors.black,
    textDecorationLine: "underline",
    fontSize: 16,
  },
});

export default ActionText;
