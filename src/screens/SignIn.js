import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import CustomInput from '../../Components/CustomComponent';
const {height, width} = Dimensions.get('window');

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Sign in to BOXD</Text>
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

      <TouchableOpacity style={styles.touchableOpac}>
        <Text>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchableOpac1}>
        <Image
          source={require('../../Images/google.png')}
          style={styles.opacimage}
        />
        <Text>Sign In with Google</Text>
      </TouchableOpacity>
      <Text style={styles.text4}>Forgetten Your Password</Text>
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
    height: height * 0.2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
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
    marginVertical: '18%',
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
