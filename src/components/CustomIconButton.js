import React from "react";
import { TouchableOpacity, Text, StyleSheet, Image,View } from "react-native";
import colors from "../utils/colors";

const CustomButton = ({ title, iconSource, onPress, iconSize = 20, buttonStyle = {} }) => {
  return (

    <View style={styles.container}>
      <TouchableOpacity style={[styles.button]}  onPress={onPress}>
      <Image source={iconSource} style={[{ width: iconSize, height: iconSize }]} />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
    </View>
    
   
   
    
   
  );
};

const styles = StyleSheet.create({
    container: {
      
        justifyContent: "center",
        alignItems: "center",
    
      },
      button: {
        flexDirection:'row',
        padding:20,
        backgroundColor:colors.white,
        paddingVertical: 10,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        // Shadow properties for iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Elevation for Android
    elevation: 5,
      },
      buttonText: {
        color: colors.black,
        fontSize: 16,
        marginLeft:20,
      },
});

export default CustomButton;
