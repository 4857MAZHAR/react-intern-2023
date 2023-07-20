import React from 'react';
import { View, Dimensions, StyleSheet,TouchableOpacity } from 'react-native';

//import formik & yup libraries
import { Formik } from 'formik';
import * as Yup from 'yup';

//import custom components
import CustomText from '../components/CustomText';
import TextInputField from '../components/TextInputField';
import CustomButton from '../components/CustomButton';
import Error from '../components/Error';

//import colors
import colors from '../utils/colors';

//import Material Community icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const screenWidth = Dimensions.get('window').width;

const ForgetPassword = ({navigation}) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email. Please try again').required('Email is required'),
  });

  const handleForgetPass = (values) => {
    console.log('Form values:', values);
    // Implement signup logic here
    //props.navigation.navigate(routes.Dashboard);
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={28} color="black" />
      </TouchableOpacity>
      <View style={styles.text}>
        <CustomText style={styles.heading} text="Forget Password" />

      </View>
      <CustomText style={styles.subheading} text="Please Enter your email address below and we will send you a link to reset your password" />
      <View style={styles.form}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleForgetPass}
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
             
              <CustomButton
                title="Reset Password"
                onPress={handleSubmit}
                style={styles.resetButton}
                textStyle={styles.resetButtonText}
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
    backgroundColor: colors.white,
    padding: screenWidth * 0.08,
    flex: 1,
  },
  text: {
    marginVertical:50,
    alignItems: 'center',
    justifyContent: 'center',
   // flex: 1.5,
  },
  heading:{
fontSize:22,
  },
  subheading:{
    fontSize:18,
    fontWeight:'normal',
      },
  form: {
 // flex: 5,
  },
  error: {
    color: 'red',
    marginBottom: 5,
  },
  resetButton: {
    marginTop: 30,
    paddingHorizontal:14,
  },
  resetButtonText: {
    
    paddingHorizontal:50,
    fontSize:20,
  },
  
});

export default ForgetPassword;
