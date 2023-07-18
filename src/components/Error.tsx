import React from 'react'
import { Text,View,StyleSheet } from 'react-native'

interface ErrorProps {
    error: string;
   
    
  }

const Error: React.FC<ErrorProps> = ({error}) => {
  return (
   <View >
    <Text style={styles.error}>{error}</Text>
   </View>
  )
}

const styles = StyleSheet.create({
   error: {
      color: "red",
      marginBottom: 5,
    },
    
  });
export default Error
