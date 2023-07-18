import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';

import Feather from 'react-native-vector-icons/Feather';

import {colors} from '../utils/colors';
export default function DynamicInput({
  onchange,
  val,
  secureEntry = false,
  boxstyle,
  inpstyle,
  placeholder = 'Email',
}) {
  const [secure, setsecure] = React.useState(secureEntry);
  return (
    <View style={[styles.inpbox, boxstyle]}>
      <TextInput
        placeholderTextColor={colors.lightgrey1}
        value={val}
        onChangeText={e => onchange(e)}
        secureTextEntry={secure}
        placeholder={placeholder}
        style={[styles.inpstyle, inpstyle]}
      />
      {secureEntry && (
        <TouchableOpacity onPress={() => setsecure(!secure)}>
          <Feather name={secure ? 'eye-off' : 'eye'} size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inpbox: {
    marginVertical: 10,
    borderWidth: 1.4,
    borderRadius: 5,
    borderColor: colors.darkgrey,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inpstyle: {
    fontSize: 17,
    width: '85%',
  },
});
