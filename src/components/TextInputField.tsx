import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import colors from '../utils/colors';

interface TextInputFieldProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry: boolean;
  
}

// Get the screen width using Dimensions
const screenWidth = Dimensions.get('window').width;

const TextInputField: React.FC<TextInputFieldProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}) => {
  return (
    <View >
      
      <TextInput
        style={styles.container}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
       
        secureTextEntry={secureTextEntry}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
    marginVertical:10,
    borderColor: 'gray',
    borderWidth: 1.5,
   paddingHorizontal: 10,
   borderRadius: 8,
   flexDirection: "row",
   width: "100%",
   alignItems: "center",
   backgroundColor:colors.white,
  },
 
});

export default TextInputField;
