import React,{useEffect,useContext} from 'react'
import { StyleSheet } from 'react-native'

//import google signin libraries
import { GoogleSignin } from '@react-native-google-signin/google-signin';

//import navigation container
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

//import auth provider
import {AuthProvider} from './src/context/AuthContext';


function App() {
  

  useEffect(() => {
    // Initialize GoogleSignin
    GoogleSignin.configure({
      scopes: ['email'], // You can add additional scopes if needed
      webClientId: 'YOUR_WEB_CLIENT_ID', // Your Web Client ID for Android
      offlineAccess: true, // If you want to support offline access
      hostedDomain: '', // If you are using GSuite, you can set the hosted domain to restrict sign-in to specific domains
    });
  }, []);

  return (
    <AuthProvider>
        <NavigationContainer>
     {/* <AuthNavigator /> */}
     <AppNavigator />
  </NavigationContainer> 
    </AuthProvider>
  
  )
}
const styles = StyleSheet.create({
  Container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});
export default App
