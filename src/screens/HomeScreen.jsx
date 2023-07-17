import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function HomeScreen({navigation, route}) {
  React.useEffect(() => {
    alert(`Welcome Back ${route.params.name}`);
  }, []);
  return (
    <View style={styles.mncontainer}>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mncontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
