import React,{useState} from 'react'
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import colors from '../utils/colors';
import EyeIcon from './EyeIcon';



// Get the screen width using Dimensions
const screenWidth = Dimensions.get('window').width;

const TextInputField  = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}) => {
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
      {secureTextEntry&&<EyeIcon isVisible={passwordVisible} onPress={togglePasswordVisibility}  />}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:15,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "gray",
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor:colors.white,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "black",
  },
 
});

export default TextInputField;
