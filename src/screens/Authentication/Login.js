//React
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
//HookForm and yup
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
//comps
import TextInput from "../../components/TextInput";
import TextButton from "../../components/TextButton";
import IconButton from "../../components/IconButton";
import CrossIcon from "../../components/Icons/CrossIcon";
//utils
import { SCREEN_NAME } from "../../utils/Const";
import { COLORS } from "../../utils";


//Validation using Yup
const validationSchema = yup.object().shape({
 email: yup.string().email('Invalid email').required('You have not entered an email address'),
 password: yup.string().required('You have not entered a password'),
});


const Login = ({ navigation }) => {
 const { handleSubmit, control, formState: { errors } } = useForm({
  resolver: yupResolver(validationSchema),
 });

 const onSubmit = (data) => {
  console.log(data);
 };

 const handleCrossIcon = () => {
  navigation.navigate(SCREEN_NAME.SignUp);
 };
 const handleGoogleSignIn = () => {

 };
 const handleForgotPress = () => {
  navigation.navigate(SCREEN_NAME.ForgotPassword);
 };

 return (
  <KeyboardAvoidingView
   style={styles.containerMain}
   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
   keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
  >
   <ScrollView contentContainerStyle={styles.container}>
    <TouchableOpacity style={styles.crossIcon} onPress={handleCrossIcon} >
     <CrossIcon width={30} height={30} />
    </TouchableOpacity>
    <Text style={styles.lineText}>
     Sign in to BOXD
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
        error={errors.password?.message}
       />
      )}
     />
    </View>
    <TextButton text="Sign in" isSignInButton onPress={handleSubmit(onSubmit)} />
    <IconButton text="Sign in with Google" onPress={handleGoogleSignIn} />
    <TextButton text="Forgotten your password" onPress={handleForgotPress} />
   </ScrollView>
  </KeyboardAvoidingView>
 );
};

const styles = StyleSheet.create({
 containerMain: {
  flexGrow: 1,
  backgroundColor: COLORS.primaryBackgroundColor,
 },
 container: {
  alignItems: 'center',
  padding: 15,
 },
 crossIcon: {
  alignSelf: 'flex-start'
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
export default Login;