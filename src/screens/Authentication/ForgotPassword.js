import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import TextInput from "../../components/TextInput";
import BackArrowIcon from "../../components/Icons/BackArrowIcon";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SCREEN_NAME } from "../../utils/Const";
import { COLORS } from "../../utils";
import TextButton from "../../components/TextButton";

const validationSchema = yup.object().shape({
 email: yup.string().email('Invalid email').required('You have not entered an email address'),
});
const ForgotPassword = ({ navigation }) => {
 const { handleSubmit, control, formState: { errors } } = useForm({
  resolver: yupResolver(validationSchema),
 });

 const handleBackButtonPress = () => {
  navigation.navigate(SCREEN_NAME.Login);
 };

 const onSubmit = (data) => {
  console.log(data);
 };
 return (
  <ScrollView contentContainerStyle={styles.container}>
   <TouchableOpacity style={styles.arrowButton} onPress={handleBackButtonPress}>
    <BackArrowIcon width={30} height={30} />
   </TouchableOpacity>

   <Text style={styles.title}>Forgot Password</Text>
   <Text style={styles.description}>Pease enter your email address below{"\n"} and we will send you a link to reset{"\n"} a password </Text>

   <View style={styles.inputContainer}>
    <Controller
     control={control}
     name="email"
     defaultValue=""
     render={({ field }) => (
      <TextInput
       placeholder="Email address"
       onChangeText={field.onChange}
       value={field.value}
       error={errors.email?.message}
      />
     )}
    />
   </View>

   <TextButton text="Reset Password" isSignInButton onPress={handleSubmit(onSubmit)} />
  </ScrollView>
 );
};

export default ForgotPassword;

const styles = StyleSheet.create({
 container: {
  flexGrow: 1,
  backgroundColor: COLORS.white,
  padding: 20,
  alignItems: 'center',
 },
 arrowButton: {
  alignSelf: "flex-start"
 },
 title: {
  fontSize: 30,
  marginTop: 30,
  color: COLORS.black,
  fontWeight: 'bold'
 },
 description: {
  marginTop: 30,
  fontSize: 18,
  textAlign: "center"
 },
 inputContainer: {
  width: '100%',
  marginTop: 30
 },
});