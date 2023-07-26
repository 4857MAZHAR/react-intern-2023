import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import CustomInput from '../Components/CustomComponent';
const {height, width} = Dimensions.get('window');

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Try BOXD for free for 2 weeks {'\n'} Quick and Simple signup{'\n'} No
          card required
        </Text>
      </View>
      <CustomInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <CustomInput
        placeholder="Password"
        keyboardType="default"
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <CustomInput
        placeholder="Confirm Password"
        keyboardType="default"
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.touchableOpac}>
        <Text>Create my Free Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchableOpac1}>
        <Image
          source={require('../Image/google.png')}
          style={styles.opacimage}
        />
        <Text style={styles.opacText}>Continue with google</Text>
      </TouchableOpacity>
      <Text style={styles.text4}>Already with BOXD?Log in here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#feeadf',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textContainer: {
    height: height * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
  },
  touchableOpac: {
    height: height * 0.06,
    width: width * 0.7,
    backgroundColor: '#fdc6b1',
    marginVertical: '10%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
  },
  touchableOpac1: {
    height: height * 0.06,
    width: width * 0.6,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    elevation: 5,
  },
  opacimage: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  opacText: {
    textAlign: 'center',
  },
  text4: {
    marginVertical: '10%',
    textDecorationLine: 'underline',
    fontSize: 18,
  },
});

export default SignUp;
