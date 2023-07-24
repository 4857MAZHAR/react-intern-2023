import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';

//components
import Heading from '../../components/Typography/Heading';
import BodyText from '../../components/Typography/BodyText';
import DynamicInput from '../../components/DynamicInput';
import DynamicButton from '../../components/DynamicButton';

import { colors } from '../../utils/theme/colors/colors';
import { screennames } from '../../utils/screennames';
import Ionicicons from 'react-native-vector-icons/Ionicons';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  pass: Yup.string().required('Password is required'),
});

export default function LoginScreen({ navigation, route }) {
  const onSubmitFunction = async values => {
    try {
      if (values.email === '' || values.pass === '') {
        alert('Fill All Fields');
      } else {
        alert(JSON.stringify(values));
      }
    } catch { }
  };

  const googleFunction = () => {
    // navigation.navigate('home', {
    //   screen: 'HomeScreen',
    // });
  };

  return (
    <KeyboardAvoidingView
      style={styles.gb}
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={{ email: '', pass: '' }}
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
                text={`Sign in to BOXD`}
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

              <DynamicInput
                placeholder="Password"
                secureEntry={true}
                val={values.pass}
                onchange={handleChange('pass')}
              />
              {errors.pass && touched.pass && (
                <Text style={styles.errortext}>{errors.pass}</Text>
              )}
              <View style={styles.center}>
                <DynamicButton
                  btnfunction={handleSubmit}
                  textstyle={styles.btntext1}
                  btnstyle={{ ...styles.btnstyle1, ...styles.center }}
                  text={'Sign in'}></DynamicButton>
                <DynamicButton
                  btnfunction={googleFunction}
                  textstyle={styles.btntext2}
                  btnstyle={styles.btnstyle2}
                  text={'Sign in with Google'}
                  icondirection="left">
                  <Image
                    source={require('../../assets/google_icon.png')}
                    style={styles.gimage}
                  />
                </DynamicButton>
                <View style={styles.center}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate(screennames.forgotpass)}
                    style={[styles.center]}>
                    <BodyText
                      textstyle={styles.reditext}
                      type="lg"
                      text="Forgotten your password?"
                    />
                  </TouchableOpacity>
                </View>
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
    backgroundColor: colors.lightorange,
    flex: 1,
  },
  mncontainer: {
    flex: 1,
    backgroundColor: colors.lightorange,
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
    borderColor: colors.darkorange,
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
    color: colors.darkgrey,
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
  },
  errortext: {
    color: colors.red,
  },
});
