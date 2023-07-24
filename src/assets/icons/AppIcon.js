import React from 'react';
import Svg, { G, Path, Rect, ClipPath } from 'react-native-svg';

const AppIcon = ({ width, height, color }) => (
 <Svg width={width} height={height} viewBox="0 0 78.094 41.794">
  <G id="logo" transform="translate(39.047 20.897)">
   <G id="logo-2" data-name="logo" transform="translate(-39.047 -20.897)">
    <ClipPath id="clip-path">
     <Rect id="Rectangle_987" data-name="Rectangle 987" width="78.094" height="41.794" fill="none" />
    </ClipPath>
    <Path
     id="Path_7542"
     data-name="Path 7542"
     d="M295.9,33.3h11.454a15.965,15.965,0,0,1,7.055,1.49,11.221,11.221,0,0,1,4.775,4.219,11.937,11.937,0,0,1,1.688,6.409,11.937,11.937,0,0,1-1.688,6.409,11.2,11.2,0,0,1-4.775,4.2,16.039,16.039,0,0,1-7.055,1.49H295.9Z"
     transform="translate(-242.778 -27.322)"
     fill="#08573e"
    />
    <Path
     id="Path_7543"
     data-name="Path 7543"
     d="M95.645,54.172a12.457,12.457,0,0,1,0-21.938,15.362,15.362,0,0,1,13.788,0,12.449,12.449,0,0,1,.018,21.938,15.362,15.362,0,0,1-13.788,0"
     transform="translate(-73.096 -25.106)"
     fill="#08573e"
    />
    <Path
     id="Path_7544"
     data-name="Path 7544"
     d="M23.866,15.859a6.072,6.072,0,0,1,1.185,3.716,5.6,5.6,0,0,1-2.567,4.919q-2.567,1.741-7.4,1.723H2V2H14.387q4.632,0,7.055,1.706a5.359,5.359,0,0,1,2.424,4.614,5.745,5.745,0,0,1-.844,3.088,5.924,5.924,0,0,1-2.406,2.154A7.007,7.007,0,0,1,23.866,15.859Z"
     transform="translate(-1.641 -1.641)"
     fill="none"
     stroke={color}
     strokeWidth="0.718"
    />
    <Path
     id="Path_7545"
     data-name="Path 7545"
     d="M194.291,120.118l-5.027-7.5-4.937,7.5H176.5l8.833-12.244L176.877,95.9h7.72l4.847,6.984,4.775-6.984h7.4l-8.438,11.687,8.994,12.531Z"
     transform="translate(-144.814 -78.683)"
     fill="none"
     stroke={color}
     strokeWidth="0.718"
    />
   </G>
  </G>
 </Svg>
);

export default AppIcon;
