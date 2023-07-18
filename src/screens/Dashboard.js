import React from 'react'
import { Text,View,StyleSheet } from 'react-native'

const Dashboard = () => {
  return (
    <View style={styles.container}>
    <Text>Dashboard Screen</Text>
    
    
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

export default Dashboard