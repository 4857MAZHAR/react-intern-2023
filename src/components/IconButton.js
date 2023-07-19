import React, { useEffect } from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { COLORS } from "../utils";
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';


const IconButton = ({ text, onPress }) => {
 useEffect(() => {
  GoogleSignin.configure({
   // Configure the necessary options for Google Sign-In
   webClientId: 'YOUR_WEB_CLIENT_ID', // Replace with your web client ID
   offlineAccess: true, // if you want to access Google API on behalf of the user without asking for permission again
  });
 }, []);



 const handleGoogleSignIn = async () => {
  try {
   await GoogleSignin.hasPlayServices(); // Check if Play Services are available
   const userInfo = await GoogleSignin.signIn(); // Trigger the Google Sign-In flow

   // Access the user information
   console.log(userInfo);
  } catch (error) {
   if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    // User canceled the sign-in process
    console.log('Sign-in process canceled');
   } else if (error.code === statusCodes.IN_PROGRESS) {
    // Another sign-in process is in progress
    console.log('Sign-in process in progress');
   } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    // Play Services not available or outdated
    console.log('Play Services not available');
   } else {
    // Other error occurred during sign-in
    console.log('Error occurred during sign-in', error);
   }
  }
 };
 return (
  <TouchableOpacity style={styles.container} onPress={handleGoogleSignIn}>
   <Image
    style={styles.img}
    source={require("../assets/google.png")} />
   <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
 );
};

const styles = StyleSheet.create({
 container: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: COLORS.white,
  borderRadius: 4,
  paddingHorizontal: 10,
  paddingVertical: 8,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  elevation: 2,
  marginTop: 50,
  paddingHorizontal: 20,  // Increase the horizontal padding to increase button width
  paddingVertical: 12,
 },
 text: {
  marginLeft: 8,
  color: COLORS.gray,
  marginLeft: 15,
  fontSize: 20
 },
 img: {
  width: 20,
  height: 20,
  marginRight: 20
 }
});


export default IconButton;