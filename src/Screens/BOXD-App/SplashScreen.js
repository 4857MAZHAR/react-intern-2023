import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ActivityIndicator,
  } from "react-native";
  import React, { useEffect } from "react";
  import { useNavigation } from "@react-navigation/native";
  
  const { height, width } = Dimensions.get("screen");
  
  const SplashScreen = () => {
    const navigation = useNavigation();
  
    useEffect(() => {
      const timer = setTimeout(() => {
        navigation.navigate("FeatureScreen");
      }, 5000);
      return () => clearTimeout(timer);
    }, [navigation]);
  
    return (
      <View style={styles.container}>
        <Image source={require("../Image/BOXD.png")} style={styles.image} />
        <View style={styles.bottomView}>
          <ActivityIndicator
            size="large"
            color="#fff"
            style={styles.activityIndicator}
          />
          <Text style={styles.text}>Loading Your Data..</Text>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      height: "100%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FF6D2C",
    },
    image: {
      height: height * 0.32,
      width: width * 0.9,
    },
    bottomView: {
      width: "100%",
      height: 80, // Increase height to accommodate ActivityIndicator
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      bottom: 0,
    },
    activityIndicator: {
      marginBottom: 10, // Adjust as needed
    },
    text: {
      color: "white",
      fontSize: 24,
    },
  });
  
  export default SplashScreen;
  