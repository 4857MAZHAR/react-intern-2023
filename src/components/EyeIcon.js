import React, { useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Replace with the desired icon library

const EyeIcon = ({ isVisible, onPress }) => {
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
      <Icon name={isVisible ? "eye-outline" : "eye-off-outline"} size={20} color="gray" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    padding: 8,
  },
});

export default EyeIcon;
