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
import React, { useEffect } from 'react';

//components
import Heading from '../../components/Typography/Heading';
import BodyText from '../../components/Typography/BodyText';
import DynamicInput from '../../components/DynamicInput';
import DynamicButton from '../../components/DynamicButton';

import Entypo from 'react-native-vector-icons/Entypo';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { screennames } from '../../utils/screenNames';
import { colors } from '../../utils/theme/colors/colors';

import SplashScreen from 'react-native-splash-screen';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  pass: Yup.string().required('Password is required'),
  confirmpass: Yup.string()
    .oneOf([Yup.ref('pass'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

export default function SignupScreen({ navigation, route }) {
  const onSubmitFunction = async values => {
    try {
      if (
        values.email === '' ||
        values.pass === '' ||
        values.confirmpass === ''
      ) {
        alert('Fill All Fields');
      } else if (values.pass !== values.confirmpass) {
        alert('Password and Confirm Password Should be Same');
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

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <KeyboardAvoidingView
      style={styles.gb}
      enabled
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={{ email: '', pass: '', confirmpass: '' }}
          validationSchema={validationSchema}
          onSubmit={values => onSubmitFunction(values)}>
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <View style={styles.mncontainer}>
              <Heading
                type="h2"
                textstyle={styles.mntext}
                text={`Try BOXD for free for 2 weeks\n Quick and simple signup\n No card required`}
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

              <DynamicInput
                placeholder="Confirm Password"
                secureEntry={true}
                val={values.confirmpass}
                onchange={handleChange('confirmpass')}
              />
              {errors.confirmpass && touched.confirmpass && (
                <Text style={styles.errortext}>{errors.confirmpass}</Text>
              )}

              <View style={styles.center}>
                <DynamicButton
                  btnfunction={handleSubmit}
                  textstyle={styles.btntext1}
                  btnstyle={styles.btnstyle1}
                  text={'Create my free account'}>
                  <Entypo
                    name="chevron-thin-right"
                    size={18}
                    color={colors.black}
                  />
                </DynamicButton>
                <DynamicButton
                  btnfunction={googleFunction}
                  textstyle={styles.btntext2}
                  btnstyle={styles.btnstyle2}
                  text={'Continue with Google'}
                  icondirection="left">
                  <Image
                    source={require('../../assets/google_icon.png')}
                    style={styles.gimage}
                  />
                </DynamicButton>
                <View style={styles.center}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate(screennames.login)}
                    style={[styles.center]}>
                    <BodyText
                      textstyle={styles.reditext}
                      type="lg"
                      text="Already with BOXD?Log in here"
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
  errortext: {
    color: colors.red,
  },
});
