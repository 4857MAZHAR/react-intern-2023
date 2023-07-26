import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BottomTabNavigator from "../../BottomTab";

const { height, width } = Dimensions.get("screen");

const StatusBar = () => {
  const notificationCount = 3; // Hardcoded for example purposes

  return (
    <View style={styles.container}>
      <View style={styles.statusBar}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Hello 28&Moon</Text>
        </View>
        <View style={styles.logoContainer}>
          <Image
            source={require("../Image/logo.png")}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.iconContainer}>
          <Icon name="bell" size={18} color="#fff" />
          {notificationCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.notificationCount}>{notificationCount}</Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.tabContainer}>
        <BottomTabNavigator />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  statusBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    height: Platform.OS === "ios" ? 100 : 90,
    backgroundColor: "white",
    elevation: 10,
  },
  textContainer: {
    alignItems: "center",
    paddingBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#08573E",
    fontWeight: "700",
  },
  logoContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 80,
    height: height * 0.05,
  },
  logoImage: {
    height: height * 0.05,
    width: width * 0.25,
    resizeMode: "contain",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF6D2C",
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginBottom: 6,
    height: height * 0.04,
  },
  badge: {
    backgroundColor: "#08573E",
    borderRadius: 9,
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 2,
    marginBottom: 3,
  },
  notificationCount: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  tabContainer: {
    flex: 1,
    elevation: 10,
  },
});

export default StatusBar;
