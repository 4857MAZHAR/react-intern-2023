import {TextInput} from 'react-native';
import React from 'react';

import {colors} from '../utils/colors';

export default function InputBox({
  inputstyles,
  placeholder,
  onChangeText,
  value,
}) {
  return (
    <TextInput
      style={inputstyles}
      placeholder={placeholder}
      value={value}
      onChangeText={e => onChangeText(e)}
    />
  );
}
