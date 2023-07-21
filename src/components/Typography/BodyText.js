import {Text} from 'react-native';
import React from 'react';

export default function BodyText({text = '', textstyle = {}, type = 'rg'}) {
  const types = {
    xl: 24,
    lg: 22,
    md: 18,
    rg: 16,
    sm: 14,
    xs: 10,
  };
  return <Text style={[textstyle, {fontSize: types[type]}]}>{text}</Text>;
}
