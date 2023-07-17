import {View, StyleSheet, Alert} from 'react-native';
import React from 'react';

import {colors} from '../utils/colors';
import InputBox from '../components/InputBox';
import CustomTextButton from '../components/CustomTextButton';

export default function BoardingScreen({navigation, route}) {
  const [name, setname] = React.useState('');

  const changeText = e => {
    setname(e);
  };

  const proceedFunction = () => {
    navigation.navigate('home', {
      screen: 'HomeScreen',
      params: {name},
    });
  };
  return (
    <View style={styles.mncontainer}>
      <View style={styles.row}>
        <InputBox
          inputstyles={styles.inputText}
          placeholder="Enter Your name"
          value={name}
          onChangeText={changeText}
        />
        <CustomTextButton
          buttonfunction={proceedFunction}
          buttonstyle={styles.btnstyle}
          btntextstyle={styles.btntext}
          text={'Proceed'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mncontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputText: {
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: colors.black,
  },
  btnstyle: {
    marginLeft: 10,
    backgroundColor: colors.black,
    paddingHorizontal: 10,
    paddingVertical: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btntext: {
    color: colors.white,
    fontSize: 17,
  },
});
