import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import {colors} from '../utils/colors';
import Heading from '../components/Typography/Heading';
import BodyText from '../components/Typography/BodyText';
import DynamicInput from '../components/DynamicInput';
import DynamicButton from '../components/DynamicButton';
import {screennames} from '../utils/screennames';

export default function SignupScreen({navigation, route}) {
  const [email, setemail] = React.useState('');
  const [pass, setpass] = React.useState('');
  const [confirmpass, setconfirmpass] = React.useState('');

  const onSubmitFunction = async () => {
    try {
      if (email === '' || pass === '' || confirmpass === '') {
        alert('Fill All Feilds');
      } else if (pass !== confirmpass) {
        alert('Password and Current Password Should be Same');
      } else {
        alert(email, pass);
      }
    } catch {}
  };

  const googleFunction = () => {
    navigation.navigate('home', {
      screen: 'HomeScreen',
    });
  };

  return (
    <View style={styles.mncontainer}>
      <Heading
        type="h2"
        textstyle={styles.mntext}
        text={`Try BOXD for free for 2 weeks\n Quick and simple signup\n No card required`}
      />
      <DynamicInput
        placeholder="Email"
        secureEntry={false}
        val={email}
        onchange={e => setemail(e)}
      />
      <DynamicInput
        placeholder="Password"
        secureEntry={true}
        val={pass}
        onchange={e => setpass(e)}
      />
      <DynamicInput
        placeholder="Confirm Password"
        secureEntry={true}
        val={confirmpass}
        onchange={e => setconfirmpass(e)}
      />
      <View style={styles.center}>
        <DynamicButton
          btnfunction={onSubmitFunction}
          textstyle={styles.btntext1}
          btnstyle={styles.btnstyle1}
          text={'Create my free account'}>
          <Entypo name="chevron-thin-right" size={18} color={colors.black} />
        </DynamicButton>
        <DynamicButton
          btnfunction={googleFunction}
          textstyle={styles.btntext2}
          btnstyle={styles.btnstyle2}
          text={'Continue with Google'}
          icondirection="left">
          <Image
            source={require('../assets/google_icon.png')}
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
  );
}

const styles = StyleSheet.create({
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
});
