//React
import React from 'react';
import { Text, View, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
//hookForm and yup
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
//comps and utils
import TextInput from '../../components/TextInput';
import IconButton from "../../components/IconButton";
import TextButton from "../../components/TextButton";
//utils
import { SCREEN_NAME } from "../../utils/Const";
import { COLORS } from "../../utils";
// import { width, height, totalSize } from 'react-native-dimension';


//Validation using Yup
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
  <KeyboardAvoidingView
   style={styles.containerMain}
   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
   keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
  >
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
    <TextButton text="Create my Free Account >" isSignInButton onPress={handleSubmit(onSubmit)} />
    <IconButton text="Continue with Google" />
    <TextButton text="Already with BOXD? Log in here" onPress={handleLoginHereButton} />
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
