import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Dash from "./Dash";

const Tab = createBottomTabNavigator();

function EmptyScreen() {
  return null;
}

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Dashboard") {
            iconName = focused ? "view-dashboard" : "view-dashboard-outline";
          } else if (route.name === "Invoices") {
            iconName = focused ? "file-document" : "file-document-outline";
          } else if (route.name === "CheckIn") {
            iconName = focused ? "map-marker" : "map-marker-outline";
          } else if (route.name === "ForYou") {
            iconName = focused
              ? "dots-horizontal"
              : "dots-horizontal-circle-outline";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}>
      <Tab.Screen name="Dashboard" component={Dash} />
      <Tab.Screen name="Invoices" component={EmptyScreen} />
      <Tab.Screen name="CheckIn" component={EmptyScreen} />
      <Tab.Screen name="ForYou" component={EmptyScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
