import React from 'react';
import Svg, { Path } from 'react-native-svg';

const BellIcon = ({ width, height, color }) => (
 <Svg width={width} height={height} viewBox="0 0 17.5 20">
  <Path
   id="Icon_awesome-bell"
   data-name="Icon awesome-bell"
   d="M8.75,20a2.5,2.5,0,0,0,2.5-2.5h-5A2.5,2.5,0,0,0,8.75,20Zm8.414-5.848C16.409,13.341,15,12.121,15,8.125a6.169,6.169,0,0,0-5-6.061V1.25a1.249,1.249,0,1,0-2.5,0v.814a6.169,6.169,0,0,0-5,6.061c0,4-1.412,5.216-2.167,6.027A1.22,1.22,0,0,0,0,15a1.251,1.251,0,0,0,1.254,1.25H16.246A1.251,1.251,0,0,0,17.5,15,1.22,1.22,0,0,0,17.164,14.152Z"
   transform="translate(0)"
   fill={color}
  />
 </Svg>
);

export default BellIcon;
