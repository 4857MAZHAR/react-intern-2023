import { View, StyleSheet,Dimensions,KeyboardAvoidingView } from 'react-native';
import React from 'react';

//Formik & yup imports
import { Formik } from 'formik';
import * as Yup from 'yup';

//import @react-native-google-signin library
import { GoogleSignin, GoogleSigninButton,statusCodes } from '@react-native-google-signin/google-signin';

//import custom Components
import CustomText from '../components/CustomText';
import TextInputField from '../components/TextInputField';
import CustomButton from '../components/CustomButton';
import Error from '../components/Error';
import CustomLink from '../components/CustomLink';


//import custom colors
import colors from '../utils/colors';


const screenWidth = Dimensions.get('window').width;


const SignupForm = (props) => {
  
  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('Google Sign-In Success:', userInfo);
      // Implement your logic here for handling successful Google Sign-In
    } catch (error) {
      console.log('Google Sign-In Error:', error.message);
    }
  };

  const handleSignUp = (values) => {
    console.log('Form values:', values);
    // Implement  signup logic
  };

  //formik validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Invalid email'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  return (
    
    <View style={styles.container}>
      
      <View style={styles.text}>
        <CustomText style={styles.heading} text="Try BOXD for free for 2 weeks" />
        <CustomText style={styles.heading} text="Quick and simple signup" />
        <CustomText style={styles.heading} text="No card required" />
      </View>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSignUp}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <View style={styles.form}>
            <TextInputField
              placeholder="Email"
              value={values.email}
              onChangeText={handleChange('email')}
              secureTextEntry={false}
            />
            {errors.email && touched.email ? (
              <Error error={errors.email} />
            ) : null}
            <TextInputField
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              secureTextEntry={true}
            />
            {errors.password && touched.password ? (
              <Error error={errors.password} />
            ) : null}
            <TextInputField
              placeholder="Confirm password"
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              secureTextEntry={true}
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <Error error={errors.confirmPassword} />
            ) : null}

            
              <CustomButton style={styles.signInBtn}
                title="Create my free account >"
                onPress={handleSubmit}
                textStyle={styles.signInBtnText}
              />

              <GoogleSigninButton
                      style={styles.googleSignInButton}
                      size={GoogleSigninButton.Size.Wide}
                      color={GoogleSigninButton.Color.Light}
                      onPress={handleGoogleSignIn}
              />
            
            <CustomLink
              text="Already with BOXD? Log in here"
              onPress={()=>props.navigation.navigate("Login")} style={styles.link}
              textStyle={styles.linkText}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
         backgroundColor:colors.primary,
        padding:screenWidth*0.08,
          
          flex:1,
        },
        text:{
         paddingVertical:screenWidth*0.05,
         alignItems:'center',
         justifyContent:'center',
        
        
        },
        form:{ 
            flex:5,
           
        },error: {
          color: "red",
          marginBottom: 5,
        },
        signInBtn:{
          
         marginVertical:30,
          alignItems:'center',
          justifyContent:'center'
        },
        signInBtnText:{
          
        fontWeight:'bold',
        padding:10,
        fontSize:16,

         },
        link:{
          marginTop:80,
       justifyContent:'space-between',
       alignItems:'flex-end',
       
        },
        linkText:{
          fontSize:18,
        },heading:{
          fontSize:20,
        },
        googleSignInButton: {
          alignSelf:'center',
          width: 250,
        
          alignContent:'center',
          justifyContent:'center',
        },
});

export default SignupForm;

