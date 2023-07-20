import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

import colors from '../utils/colors';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 

// Get the screen width using Dimensions
const screenWidth = Dimensions.get('window').width;

const EyeIcon = ({ isVisible, onPress }) => {
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
      <Icon name={isVisible ? 'eye-outline' : 'eye-off-outline'} size={20} color="gray" />
    </TouchableOpacity>
  );
};

const TextInputField = ({ placeholder, value, onChangeText, secureTextEntry }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [secureText, setSecureText] = useState(secureTextEntry);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
    setSecureText(passwordVisible);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureText}
      />
      {secureTextEntry && <EyeIcon isVisible={passwordVisible} onPress={togglePasswordVisibility} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: colors.white,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  iconContainer: {
    padding: 8,
  },
});

export default TextInputField;
