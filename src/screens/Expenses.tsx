import React from 'react'
import { Text,View,StyleSheet } from 'react-native'

const Expenses = () => {
  return (
    <View style={styles.container}>
    <Text>Expenses Screen</Text>
    
    
</View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems:"center",
      justifyContent:"center"
    }
  });

export default Expenses