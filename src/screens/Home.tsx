import React from 'react'
import { View ,Text,StyleSheet,Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Home = (props:any) => {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
        <Text>Home Screens</Text>
        <Button title='Go To Details' onPress={()=>props.navigation.navigate("Details")}></Button>
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
  
export default Home