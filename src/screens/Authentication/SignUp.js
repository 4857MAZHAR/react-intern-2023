import React, { useEffect } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CustomTextInput from '../../components/CustomTextInput';
import CustomSignInButton from "../../components/CustomSignInButton";
import IconButton from "../../components/IconButton";
import TextButton from "../../components/TextButton";
// import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';

const validationSchema = yup.object().shape({
 email: yup.string().email('Invalid email').required('Email is required'),
 password: yup.string().min(4, 'Password must be at least 4 characters').required('Password is required'),
 confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
});

const SignUp = ({ navigation }) => {
 const { handleSubmit, control, formState: { errors } } = useForm({
  resolver: yupResolver(validationSchema),
 });

 console.log(errors);

 const onSubmit = (data) => {
  console.log(data);
 };

 const handleLoginHereButton = () => {
  navigation.navigate("Login");
 };

 useEffect(() => {
  // GoogleSignin.configure({
  //  webClientId: 'YOUR_WEB_CLIENT_ID',
  // });
 }, []);

 const handleGoogleSignIn = async () => {
  // try {
  //  await GoogleSignin.hasPlayServices();
  //  const userInfo = await GoogleSignin.signIn();
  //  console.log(userInfo);
  //  // Use the userInfo object for further processing (e.g., sending to the server)
  // } catch (error) {
  //  if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //   // Handle sign-in cancellation
  //   console.log('Sign-in cancelled');
  //  } else if (error.code === statusCodes.IN_PROGRESS) {
  //   // Handle sign-in in progress
  //   console.log('Sign-in in progress');
  //  } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //   // Handle Play Services not available
  //   console.log('Play Services not available');
  //  } else {
  //   // Handle other errors
  //   console.log('Error occurred', error);
  //  }
  // }
 };

 return (
  <ScrollView contentContainerStyle={styles.container}>
   <Text style={styles.lineText}>
    Try BOXD for free for 2 weeks
    {'\n'}
    Quick and simple signUp
    {'\n'}
    No card required
   </Text>
   <View style={styles.inputContainer}>
    <Controller
     control={control}
     name="email"
     defaultValue=""
     render={({ field }) => (
      <CustomTextInput
       placeholder="Email"
       onChangeText={field.onChange}
       value={field.value}
       error={errors.email?.message}
      />
     )}
    />
    <Controller
     control={control}
     name="password"
     defaultValue=""
     render={({ field }) => (
      <CustomTextInput
       placeholder="Password"
       onChangeText={field.onChange}
       value={field.value}
       secureTextEntry={true}
       error={errors.password?.message}
      />
     )}
    />
    <Controller
     control={control}
     name="confirmPassword"
     defaultValue=""
     render={({ field }) => (
      <CustomTextInput
       placeholder="Confirm Password"
       onChangeText={field.onChange}
       value={field.value}
       secureTextEntry={true}
       error={errors.confirmPassword?.message}
      />
     )}
    />
   </View>
   <CustomSignInButton text="Create my Free Account" nextLineText=">" onPress={handleSubmit(onSubmit)} />
   <IconButton text="Continue with Google" onPress={handleGoogleSignIn} />
   <TextButton text="Already with BOXD? Log in here" onPress={handleLoginHereButton} />
  </ScrollView>
 );
};

const styles = StyleSheet.create({
 container: {
  flexGrow: 1,
  alignItems: 'center',
  backgroundColor: '#FEEADF',
  padding: 15,
 },
 lineText: {
  fontSize: 24,
  color: 'black',
  textAlign: 'center',
  fontWeight: 'bold',
  marginTop: 20,
 },
 inputContainer: {
  width: '100%',
  marginTop: 30
 },
});

export default SignUp;
