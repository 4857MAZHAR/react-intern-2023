import { View, Dimensions, StyleSheet ,TouchableOpacity,Text} from 'react-native';
import React, { useContext } from 'react';

//import formik & yup libraries
import { Formik } from 'formik';
import * as Yup from 'yup';

//import @react-native-google-signin library
import { GoogleSignin, GoogleSigninButton,statusCodes } from '@react-native-google-signin/google-signin';

//import custom components
import CustomText from '../components/CustomText';
import TextInputField from '../components/TextInputField';
import CustomButton from '../components/CustomButton';
import Error from '../components/Error';
import CustomLink from '../components/CustomLink';

//import colors
import colors from '../utils/colors';

//import Material Community icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//import auth context for successful login
import { AuthContext } from '../context/AuthContext';



const screenWidth = Dimensions.get('window').width;


const Login = ({navigation}) => {
  
  const {login}=useContext(AuthContext);


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

  const handleLogin = (values) => {
    console.log('Form values:', values);
   
    login(values.email,values.password);
    
   
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  

  return (
    <View style={styles.container}>
      <View >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="close" size={28} color="black" />
      </TouchableOpacity>
      
    </View>
     
      <View style={styles.text}>
        <CustomText style={styles.heading} text="Sign in to BOXD" />
      </View>

      <View style={styles.form}>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
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
              
              <GoogleSigninButton
                      style={styles.googleSignInButton}
                      size={GoogleSigninButton.Size.Wide}
                      color={GoogleSigninButton.Color.Light}
                      onPress={handleGoogleSignIn}
              />

              <CustomLink
                text="Forgotten your password?"
                onPress={() => navigation.navigate("ForgetPassword")}
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
  googleSignInButton: {
    marginTop:30,
          alignSelf:'center',
          width: 250,
        
          alignContent:'center',
          justifyContent:'center',
        },
});

export default Login;
