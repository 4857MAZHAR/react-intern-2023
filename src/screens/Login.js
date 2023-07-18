import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import CenteredText from '../components/CenteredText';
import TextInputField from '../components/TextInputField';
import colors from '../utils/colors';
import CustomButton from '../components/CustomButton';
import CustomIconButton from '../components/CustomIconButton';
import * as Yup from 'yup';
import Error from '../components/Error';
import ActionText from '../components/ActionText';

const screenWidth = Dimensions.get('window').width;

const Login = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSignUp = (values) => {
    console.log('Form values:', values);
    // Implement signup logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <CenteredText style={styles.heading} text="Sign in to BOXD" />
      </View>
      <View style={styles.form}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSignUp}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <>
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
              <CustomButton
                title="Sign in"
                onPress={handleSubmit}
                style={styles.signInButton}
                textStyle={styles.signInButtonText}
              />
              
              <CustomIconButton style={styles.iconbtn}
                title="Continue with Google"
                iconSource={require('../assets/icons/googleIcon.png')}
                onPress={() => console.log('SignIn with Google')}
              />
              <ActionText
                text="Forgotten your password?"
                onPress={() => console.log('Forget password Logic here')}
                style={styles.link}
                textStyle={styles.linkText}
              />
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: screenWidth * 0.08,
    flex: 1,
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1.5,
  },
  heading:{
fontSize:25,
  },
  form: {
  flex: 5,
  },
  error: {
    color: 'red',
    marginBottom: 5,
  },
  signInButton: {
    marginTop: 30,
    paddingHorizontal:38,
  },
  signInButtonText: {
    
    paddingHorizontal:50,
    fontSize:20,
  },
  link:{
    marginVertical:40,
  },
  linkText:{
    fontSize:15,
  },
  iconbtn:{
        
    marginTop:100,
   }
});

export default Login;
