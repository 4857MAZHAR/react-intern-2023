import { SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import Header from "../../components/Header";
import { colors } from "../../utils/theme/colors/colors";
import { Image } from "react-native";
import BellIcon from "../../assets/icons/BellIcon";
import { Text } from "react-native";
import LogoIcon from "../../assets/icons/LogoIcon";

const Dashboard = () => {
 const userName = "28&Moon";
 const notificationCount = 3;
 return (
  <SafeAreaView>
   <Header
    title={`Hello ${userName}`}
    rightComponent={
     <View style={styles.rightContainer}>
      {/* Logo */}
      <LogoIcon height={55} width={60} />
      {/* Right */}
      <View style={styles.box}>
       <BellIcon width={17} height={17} color={colors.white} />
       <View style={styles.countContainer}>
        <Text style={styles.countText}>
         {notificationCount}
        </Text>
       </View>
      </View>
     </View>
    }
   />
  </SafeAreaView>
 );
};

export default Dashboard;

const styles = StyleSheet.create({
 rightContainer: {
  flexDirection: 'row',
  alignItems: "center",
 },
 box: {
  height: 35,
  width: 50,
  alignItems: "center",
  justifyContent: 'center',
  backgroundColor: colors.orangePrimary,
  borderTopLeftRadius: 5,
  borderBottomLeftRadius: 5,
  flexDirection: "row",
  marginLeft: 4
 },
 countContainer: {
  width: 18,
  height: 18,
  backgroundColor: colors.green,
  borderRadius: 10,
  marginLeft: 5,
  justifyContent: 'center',
  alignItems: 'center',
 },
 countText: {
  color: colors.white,
  fontSize: 11
 }
});
