import React from 'react';
import Svg, { G, Circle } from 'react-native-svg';

const ForYouIcon = ({ width, height, color }) => (
 <Svg width={width} height={height} viewBox="0 0 24 6">
  <G id="Group_2041" data-name="Group 2041">
   <G id="Ellipse_31" data-name="Ellipse 31" transform="translate(0 0)">
    <Circle cx="3" cy="3" r="3" fill="none" stroke={color} strokeWidth="1" />
    <Circle cx="3" cy="3" r="2.5" fill="none" stroke="none" />
   </G>
   <G id="Ellipse_32" data-name="Ellipse 32" transform="translate(9 0)">
    <Circle cx="3" cy="3" r="3" fill="none" stroke={color} strokeWidth="1" />
    <Circle cx="3" cy="3" r="2.5" fill="none" stroke="none" />
   </G>
   <G id="Ellipse_33" data-name="Ellipse 33" transform="translate(18 0)">
    <Circle cx="3" cy="3" r="3" fill="none" stroke={color} strokeWidth="1" />
    <Circle cx="3" cy="3" r="2.5" fill="none" stroke="none" />
   </G>
  </G>
 </Svg>
);

export default ForYouIcon;
