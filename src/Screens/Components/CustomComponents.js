import React, {useState} from 'react';
import {
  View,
  TextInput,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const CustomInput = ({
  placeholder,
  keyboardType,
  autoCapitalize,
  secureTextEntry: initialSecureTextEntry,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(
    initialSecureTextEntry,
  );

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const toggleSecureTextEntry = () => setSecureTextEntry(prev => !prev);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[
          styles.textinput,
          {borderColor: isFocused ? 'black' : 'lightgrey'},
        ]}
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {initialSecureTextEntry && (
        <TouchableOpacity style={styles.icon} onPress={toggleSecureTextEntry}>
          <Icon
            name={secureTextEntry ? 'eye-off-outline' : 'eye-outline'}
            size={24}
            color={'grey'}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: height * 0.1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textinput: {
    width: width * 0.8,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    height: height * 0.06,
    paddingLeft: 10,
    fontSize: 16,
  },
  icon: {
    position: 'absolute',
    right: 15,
  },
});

export default CustomInput;
