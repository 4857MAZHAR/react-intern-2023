// icon:arrow-back-sharp | Ionicons https://ionicons.com/ | Ionic Framework
import * as React from "react";
import Svg, { Path } from "react-native-svg";

function BackArrowIcon(props) {
 return (
  <Svg
   viewBox="0 0 512 512"
   fill="black"
   {...props}
  >
   <Path
    fill="none"
    stroke="black"
    strokeLinecap="square"
    strokeMiterlimit={10}
    strokeWidth={48}
    d="M244 400L100 256l144-144M120 256h292"
   />
  </Svg>
 );
}

export default BackArrowIcon;
