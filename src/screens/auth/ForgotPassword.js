import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React from 'react';

//components
import Heading from '../../components/Typography/Heading';
import BodyText from '../../components/Typography/BodyText';
import DynamicInput from '../../components/DynamicInput';
import DynamicButton from '../../components/DynamicButton';

import Ionicicons from 'react-native-vector-icons/Ionicons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { colors } from '../../utils/theme/colors/colors';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

export default function ForgotPassword({ navigation, route }) {
  const onSubmitFunction = async values => {
    try {
      if (values.email === '') {
        alert('Provide Email Address');
      } else {
        alert(JSON.stringify(values));
      }
    } catch { }
  };

  return (
    <KeyboardAvoidingView
      style={styles.gb}
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={validationSchema}
          onSubmit={values => onSubmitFunction(values)}>
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <View style={styles.mncontainer}>
              <View style={styles.backheader}>
                <TouchableOpacity onPress={() => navigation.pop()}>
                  <Ionicicons name="arrow-back-sharp" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <Heading
                type="h2"
                textstyle={styles.mntext}
                text={`Forgot Password`}
              />
              <BodyText
                type="md"
                textstyle={styles.bodytext}
                text={`Please enter your email address \n below and we will send you a link to\n reset password`}
              />
              <DynamicInput
                placeholder="Email"
                secureEntry={false}
                val={values.email}
                onchange={handleChange('email')}
              />
              {errors.email && touched.email && (
                <Text style={styles.errortext}>{errors.email}</Text>
              )}

              <View style={styles.center}>
                <DynamicButton
                  btnfunction={handleSubmit}
                  textstyle={styles.btntext1}
                  btnstyle={{ ...styles.btnstyle1, ...styles.center }}
                  text={'Reset Password'}></DynamicButton>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  gb: {
    backgroundColor: colors.lightOrange,
    flex: 1,
  },
  mncontainer: {
    flex: 1,
    backgroundColor: colors.lightOrange,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  mntext: {
    color: colors.black,
    marginTop: 10,
    marginBottom: 20,
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnstyle1: {
    width: '80%',
    backgroundColor: colors.orange,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.darkOrange,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  btntext1: {
    color: colors.black,
  },
  btnstyle2: {
    width: '80%',
    backgroundColor: colors.white,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  btntext2: {
    color: colors.darkGray,
  },
  gimage: {
    height: 30,
    width: 30,
  },
  reditext: {
    color: colors.black,
    marginTop: 30,
    textDecorationLine: 'underline',
  },
  backheader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  bodytext: {
    textAlign: 'center',
    color: colors.black,
    marginBottom: 10,
  },
  errortext: {
    color: colors.red,
  },
});
