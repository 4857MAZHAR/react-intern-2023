import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import Heading from './Typography/Heading';

export default function DynamicButton({
  text,
  btnstyle,
  textstyle,
  icondirection = 'right',
  children,
  btnfunction,
}) {
  return (
    <TouchableOpacity
      onPress={btnfunction}
      style={[
        styles.mncon,
        btnstyle,
        {flexDirection: icondirection === 'right' ? 'row' : 'row-reverse'},
      ]}>
      <Heading type="h4" text={text} textstyle={textstyle} />
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mncon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 20,
  },
});
