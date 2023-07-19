import React, { useEffect } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextInput from '../../components/TextInput';
import SignInButton from "../../components/SignInButton";
import IconButton from "../../components/IconButton";
import TextButton from "../../components/TextButton";
import { SCREEN_NAME } from "../../utils/Const";
import { COLORS } from "../../utils";
import { width, height, totalSize } from 'react-native-dimension';



const validationSchema = yup.object().shape({
 email: yup.string().email('Invalid email').required('Email is required'),
 password: yup.string().min(4, 'Password must be at least 4 characters').required('Password is required'),
 confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
});

const SignUp = ({ navigation }) => {
 const { handleSubmit, control, formState: { errors } } = useForm({
  resolver: yupResolver(validationSchema),
 });







 const onSubmit = (data) => {
  console.log(data);
 };

 const handleLoginHereButton = () => {
  navigation.navigate(SCREEN_NAME.Login);
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
      <TextInput
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
      <TextInput
       placeholder="Password"
       onChangeText={field.onChange}
       value={field.value}
       secureTextEntry={true}
       eyeVis={true}
       error={errors.password?.message}
      />
     )}
    />
    <Controller
     control={control}
     name="confirmPassword"
     defaultValue=""
     render={({ field }) => (
      <TextInput
       placeholder="Confirm Password"
       onChangeText={field.onChange}
       value={field.value}
       secureTextEntry={true}
       eyeVis={true}
       error={errors.confirmPassword?.message}
      />
     )}
    />
   </View>
   <SignInButton text="Create my Free Account" nextLineText=">" onPress={handleSubmit(onSubmit)} />
   <IconButton text="Continue with Google" />
   <TextButton text="Already with BOXD? Log in here" onPress={handleLoginHereButton} />
  </ScrollView>
 );
};

const styles = StyleSheet.create({
 container: {
  flexGrow: 1,
  alignItems: 'center',
  backgroundColor: COLORS.primaryBackgroundColor,
  padding: 15,
 },
 lineText: {
  fontSize: 24,
  color: COLORS.black,
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
