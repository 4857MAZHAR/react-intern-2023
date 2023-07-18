import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../utils/colors';

interface CenteredTextProps {
  text: string;
}

const CenteredText: React.FC<CenteredTextProps> = ({ text }) => {
  return (
    <View style={styles.container} >
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    color: colors.black,
    
   
   
  },
});

export default CenteredText;
