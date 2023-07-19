import React from "react";
import { View, StyleSheet } from "react-native";
import { Svg, Path } from "react-native-svg";

const CrossIcon = (props) => {
 return (
  <View style={{ alignSelf: "flex-start" }}>
   <Svg
    viewBox="0 0 16 16"
    height="16"
    width="16"
    {...props}
   >
    <Path
     fill="black"
     fillRule="evenodd"
     d="M11.782 4.032a.575.575 0 10-.813-.814L7.5 6.687 4.032 3.218a.575.575 0 00-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 00.814.814L7.5 8.313l3.469 3.469a.575.575 0 00.813-.814L8.313 7.5l3.469-3.468z"
     clipRule="evenodd"
    />
   </Svg>
  </View>
 );
};

export default CrossIcon;
