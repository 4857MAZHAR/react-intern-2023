import React from 'react';
import { View, StyleSheet,Dimensions,KeyboardAvoidingView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CenteredText from '../components/CenteredText';
import TextInputField from '../components/TextInputField';
import colors from '../utils/colors';
import CustomButton from '../components/CustomButton';
import Error from '../components/Error';
import ActionText from '../components/ActionText';
import CustomIconButton from '../components/CustomIconButton';
const screenWidth = Dimensions.get('window').width;

const SignupForm = () => {
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUp = (values) => {
    console.log('Form values:', values);
    // Implement  signup logic
  };

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
        <CenteredText style={styles.heading} text="Try BOXD for free for 2 weeks" />
        <CenteredText style={styles.heading} text="Quick and simple signup" />
        <CenteredText style={styles.heading} text="No card required" />
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
            

           
              <CustomIconButton style={styles.iconbtn}
                title="Continue with Google"
                iconSource={require('../assets/icons/googleIcon.png')}
                onPress={() => console.log('Login with Google')}
              />
            

            <ActionText
              text="Already with BOXD? Log in here"
              onPress={() => console.log('Move to Sign in page')} style={styles.link}
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
        iconbtn:{
        
         marginTop:20,
        },
        link:{
          marginTop:120,
       justifyContent:'space-between',
       alignItems:'flex-end',
       
        },
        linkText:{
          fontSize:18,
        },heading:{
          fontSize:20,
        }
});

export default SignupForm;

