import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    Image,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import { useNavigation } from "@react-navigation/native";
  
  const { height, width } = Dimensions.get("screen");
  
  const FeatureScreen = () => {
    const navigation = useNavigation();
  
    return (
      <View style={styles.container}>
        <Text style={styles.text}>New for You</Text>
        <View style={styles.picView}>
          <Text style={styles.textPic}>
            Say Hello To your{"\n"}business activity {"\n"}
          </Text>
          <Image source={require("../Image/pic.png")} style={styles.picImage} />
          <Text style={styles.textpiic1}>
            TBC line about what this is{"\n"}TBC line about what this is
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("DashBoard")}>
            <Text style={styles.buttonText}>Continue To Dashboard</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      height: "100%",
      width: "100%",
    },
    text: {
      height: height * 0.08,
      textAlign: "center",
      textAlignVertical: "bottom",
      color: "#08573E",
    },
    picView: {
      height: height * 0.73,
      width: width * 1,
      backgroundColor: "#08573E",
    },
    textPic: {
      fontSize: 20,
      color: "white",
      height: height * 0.15,
      width: width * 0.55,
      textAlign: "center",
      textAlignVertical: "center",
    },
    buttonContainer: {
      height: height * 1,
      backgroundColor: "#FFEAE0",
      alignItems: "center",
    },
    picImage: {
      alignSelf: "center",
    },
    textpiic1: {
      color: "white",
      fontSize: 14,
      height: height * 0.1,
      width: width * 0.6,
      textAlign: "center",
      textAlignVertical: "center",
      lineHeight: 22,
    },
    button: {
      backgroundColor: "#FCC6B1",
      padding: 6,
      borderWidth: 2,
      borderColor: "#FE9161",
      borderRadius: 20,
      marginVertical: "10%",
      height: height * 0.05,
    },
    buttonText: {
      color: "black",
      fontSize: 16,
    },
  });
  
  export default FeatureScreen;
  